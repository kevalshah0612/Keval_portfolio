import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Initialize EmailJS with public key
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  // Validation patterns and rules (keep your existing validation code)
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: {
        required: 'Please enter your full name',
        minLength: 'Name must be at least 2 characters',
        maxLength: 'Name is too long (max 50 characters)',
        pattern: 'Name can only contain letters and spaces'
      }
    },
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: {
        required: 'Please enter your email address',
        pattern: 'Please enter a valid email address'
      }
    },
    subject: {
      required: true,
      minLength: 5,
      maxLength: 100,
      message: {
        required: 'Please enter a subject',
        minLength: 'Subject must be at least 5 characters',
        maxLength: 'Subject is too long (max 100 characters)'
      }
    },
    message: {
      required: true,
      minLength: 20,
      maxLength: 1000,
      message: {
        required: 'Please enter your message',
        minLength: 'Message must be at least 20 characters',
        maxLength: 'Message is too long (max 1000 characters)'
      }
    }
  };

  // Keep all your existing validation functions
  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return null;

    if (rules.required && (!value || value.trim() === '')) {
      return rules.message.required;
    }

    if (!value || value.trim() === '') return null;

    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message.pattern;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return rules.message.minLength;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return rules.message.maxLength;
    }

    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Updated handleSubmit with EmailJS integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      setAlertType('danger');
      setAlertMessage('❌ Please fix the errors below before submitting.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setAlertType('danger');
      setAlertMessage('❌ Email service is not configured. Please contact me directly at ' + portfolioData.personal.email);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 7000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: portfolioData.personal.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
        
        // Additional context
        portfolio_url: window.location.origin,
        timestamp: new Date().toLocaleString('en-US', {
          timeZone: 'America/New_York',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        user_agent: navigator.userAgent.substring(0, 100), // First 100 chars for context
      };

      console.log('📧 Sending email via EmailJS...');
      
      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', response);
      
      // Success response
      setAlertType('success');
      setAlertMessage(
        `🎉 Thank you ${formData.name}! Your message has been sent successfully. 
        I'll get back to you within 24 hours at ${formData.email}. 
        Please check your spam folder if you don't see my reply in your inbox.`
      );
      setShowAlert(true);
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      
      setTimeout(() => setShowAlert(false), 10000);

    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      
      // Detailed error handling
      let errorMessage = '❌ Sorry, there was an error sending your message. ';
      
      if (error.status === 400) {
        errorMessage += 'Please check your input and try again.';
      } else if (error.status === 402) {
        errorMessage += 'Email service limit reached. Please contact me directly at ' + portfolioData.personal.email;
      } else if (error.status === 403) {
        errorMessage += 'Service temporarily unavailable. Please try again in a few minutes.';
      } else {
        errorMessage += 'Please try again later or email me directly at ' + portfolioData.personal.email;
      }
      
      setAlertType('danger');
      setAlertMessage(errorMessage);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keep your existing helper functions
  const getFieldClass = (fieldName) => {
    const baseClass = 'form-control-clean';
    if (!touched[fieldName]) return baseClass;
    
    if (errors[fieldName]) {
      return `${baseClass} is-invalid-clean`;
    } else if (formData[fieldName] && formData[fieldName].trim() !== '') {
      return `${baseClass} is-valid-clean`;
    }
    return baseClass;
  };

  const getCharacterCount = (fieldName) => {
    const value = formData[fieldName] || '';
    const rules = validationRules[fieldName];
    if (!rules || !rules.maxLength) return null;
    
    const remaining = rules.maxLength - value.length;
    const isWarning = remaining < rules.maxLength * 0.1;
    
    return {
      current: value.length,
      max: rules.maxLength,
      remaining,
      isWarning
    };
  };

  return (
    <section id="contact" className="py-5 contact-dark-section">
      <Container>
        {/* Section Header */}
        <Row>
          <Col xs={12} className="text-center mb-5">
            <h2 className="section-title text-white" data-aos="fade-up">Get In Touch</h2>
            <div className="section-divider mx-auto bg-gradient-primary"></div>
            <p className="lead text-light opacity-75 mb-0" data-aos="fade-up" data-aos-delay="200">
              Ready to contribute to your team's success
            </p>
          </Col>
        </Row>

        {/* Alert Messages */}
        {showAlert && (
          <Row className="mb-4">
            <Col xs={12} lg={10} className="mx-auto">
              <Alert variant={alertType} className="alert-clean text-center border-0 shadow-lg">
                <i className={`fas ${alertType === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'} me-2`}></i>
                <div className="alert-content">
                  {alertMessage.split('. ').map((sentence, index) => (
                    <div key={index} className={index === 0 ? 'fw-bold' : 'mt-1'}>
                      {sentence}{index < alertMessage.split('. ').length - 1 ? '.' : ''}
                    </div>
                  ))}
                </div>
              </Alert>
            </Col>
          </Row>
        )}

        <Row className="align-items-start">
          {/* Keep your existing Left Column - Contact Info */}
          <Col xs={12} lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
            {/* ... your existing contact info code ... */}
            <Card className="contact-info-card border-0">
              <Card.Body className="p-4">
                <h3 className="mb-4 fw-bold text-white">
                  <i className="fas fa-handshake me-3 text-primary"></i>
                  Let's Connect
                </h3>
                
                <p className="mb-4 text-light opacity-90 contact-description">
                  I'm actively seeking <span className="text-primary fw-bold">Summer 2026 internships</span> and 
                  <span className="text-primary fw-bold"> full-time SDE roles</span>. With 3.8+ years of experience 
                  at TCS and a perfect 4.0 GPA, I'm ready to contribute to innovative projects.
                </p>

                {/* Your existing contact items, social links, and CTA code */}
                <div className="contact-items mb-4">
                  {[
                    { icon: 'fas fa-envelope', label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}`, color: 'primary' },
                    { icon: 'fas fa-phone', label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}`, color: 'success' },
                    { icon: 'fas fa-map-marker-alt', label: 'Location', value: portfolioData.personal.location, color: 'warning' }
                  ].map((item, index) => (
                    <div key={index} className="contact-item-dark mb-3">
                      <div className="d-flex align-items-center">
                        <div className={`contact-icon-wrapper me-3 bg-${item.color}`}>
                          <i className={`${item.icon} text-white`}></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className={`mb-1 text-${item.color} fw-bold contact-label`}>{item.label}</h6>
                          {item.href ? (
                            <a href={item.href} className="text-light text-decoration-none contact-value">
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-light opacity-75 contact-value">{item.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="social-links-dark mb-4">
                  <h5 className="mb-3 fw-bold text-white">
                    <i className="fas fa-share-alt me-2 text-primary"></i>
                    Connect on Social Media
                  </h5>
                  <div className="d-flex flex-column flex-sm-row gap-3">
                    <a 
                      href={portfolioData.personal.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn social-btn-linkedin"
                    >
                      <i className="fab fa-linkedin fa-lg me-2"></i>
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href={portfolioData.personal.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn social-btn-github"
                    >
                      <i className="fab fa-github fa-lg me-2"></i>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="cta-dark-box">
                  <h6 className="text-white fw-bold mb-3 cta-title">
                    <i className="fas fa-briefcase me-2"></i>
                    Currently Open For
                  </h6>
                  <ul className="list-unstyled mb-0 cta-list">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      <span className="text-light">Summer 2026 Software Engineering Internships</span>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      <span className="text-light">Full-time Software Developer Roles (2026)</span>
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check text-success me-2"></i>
                      <span className="text-light">Backend/Full-stack Development Positions</span>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Contact Form (keep your existing form JSX) */}
          <Col xs={12} lg={6} data-aos="fade-left">
            <Card className="contact-form-dark border-0">
              <Card.Body className="p-4">
                <h4 className="text-white mb-4 fw-bold form-title">
                  <i className="fas fa-paper-plane me-3 text-primary"></i>
                  Send a Message
                </h4>
                
                <Form onSubmit={handleSubmit} noValidate>
                  {/* Keep all your existing form fields exactly as they are */}
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="form-label-clean">
                          Full Name <span className="required-asterisk">*</span>
                        </Form.Label>
                        <div className="input-wrapper">
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={getFieldClass('name')}
                            maxLength={validationRules.name.maxLength}
                          />
                          {touched.name && !errors.name && formData.name && (
                            <div className="field-success-icon">
                              <i className="fas fa-check"></i>
                            </div>
                          )}
                        </div>
                        {errors.name && touched.name && (
                          <div className="validation-message error">
                            {errors.name}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="form-label-clean">
                          Email Address <span className="required-asterisk">*</span>
                        </Form.Label>
                        <div className="input-wrapper">
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={getFieldClass('email')}
                          />
                          {touched.email && !errors.email && formData.email && (
                            <div className="field-success-icon">
                              <i className="fas fa-check"></i>
                            </div>
                          )}
                        </div>
                        {errors.email && touched.email && (
                          <div className="validation-message error">
                            {errors.email}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label-clean">
                      Subject <span className="required-asterisk">*</span>
                    </Form.Label>
                    <div className="input-wrapper">
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getFieldClass('subject')}
                        maxLength={validationRules.subject.maxLength}
                      />
                      {touched.subject && !errors.subject && formData.subject && (
                        <div className="field-success-icon">
                          <i className="fas fa-check"></i>
                        </div>
                      )}
                    </div>
                    {errors.subject && touched.subject && (
                      <div className="validation-message error">
                        {errors.subject}
                      </div>
                    )}
                    {getCharacterCount('subject') && (
                      <div className={`character-counter ${getCharacterCount('subject').isWarning ? 'warning' : ''}`}>
                        {getCharacterCount('subject').current}/{getCharacterCount('subject').max}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-clean">
                      Message <span className="required-asterisk">*</span>
                    </Form.Label>
                    <div className="input-wrapper">
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Tell me about the opportunity, project details, or how we can work together..."
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getFieldClass('message')}
                        maxLength={validationRules.message.maxLength}
                      />
                      {touched.message && !errors.message && formData.message && (
                        <div className="field-success-icon textarea">
                          <i className="fas fa-check"></i>
                        </div>
                      )}
                    </div>
                    {errors.message && touched.message && (
                      <div className="validation-message error">
                        {errors.message}
                      </div>
                    )}
                    {getCharacterCount('message') && (
                      <div className={`character-counter ${getCharacterCount('message').isWarning ? 'warning' : ''}`}>
                        {getCharacterCount('message').current}/{getCharacterCount('message').max}
                      </div>
                    )}
                  </Form.Group>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-100 submit-btn-clean"
                    disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fas fa-paper-plane ms-2"></i>
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
