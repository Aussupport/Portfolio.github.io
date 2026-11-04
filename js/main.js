/**
 * AUSNET IT SOLUTIONS - Core Client Scripts
 * Brand Direction: IT Engineering. Cloud Solutions. Cybersecurity.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initServiceModals();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   Header Scroll Effects
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  // Close when clicking nav links
  const links = mainNav.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

/* ==========================================================================
   Detailed Service Modals
   ========================================================================== */
const SERVICE_DETAILS = {
  azure: {
    title: 'Cloud & Azure Infrastructure',
    tagline: 'Enterprise-grade Microsoft Azure architecture, migration and governance.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    overview: 'We engineer reliable, scalable, and cost-controlled Microsoft Azure environments built strictly according to the Microsoft Cloud Adoption Framework (CAF) and Well-Architected Framework.',
    capabilities: [
      'Azure Landing Zones & Governance Architecture',
      'Lift-and-Shift, Hybrid, and Cloud-Native Workload Migrations',
      'Azure Virtual Desktop (AVD) & Resilient Hybrid Compute',
      'Business Continuity & Disaster Recovery (Azure Site Recovery, Immutable Backups)',
      'FinOps: Cloud Cost Optimisation, Right-Sizing & Reserved Instance Planning',
      'ExpressRoute, VPN Gateway, and Software-Defined Cloud Networking'
    ],
    deliverables: 'Architecture design documents, automated Terraform/Bicep IaC templates, deployment runbooks, and handover documentation with ongoing SLA monitoring.'
  },
  m365: {
    title: 'Microsoft 365 & Modern Workplace',
    tagline: 'Secure productivity, endpoint governance, and collaborative cloud ecosystems.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    overview: 'Transform how your distributed teams work with enterprise-hardened Microsoft 365. We unify endpoint management, identity-driven access, and secure data sharing across Windows, macOS, iOS, and Android.',
    capabilities: [
      'Microsoft Intune & Endpoint Manager Zero-Touch Autopilot Deployment',
      'Exchange Online, SharePoint Online, and OneDrive Enterprise Migrations',
      'Microsoft Purview Data Loss Prevention (DLP) & Information Protection',
      'Microsoft Teams Enterprise Voice, Meeting Rooms & Direct Routing',
      'Conditional Access, Phishing-Resistant MFA, and Session Controls',
      'Modern Workplace Governance, Lifecycle Management & Licensing Audit'
    ],
    deliverables: 'Standard Operating Environment (SOE) policies, Intune compliance baselines, automated onboarding workflows, and end-user adoption guides.'
  },
  cybersecurity: {
    title: 'Cybersecurity & Identity',
    tagline: 'Zero Trust architecture, ACSC Essential Eight maturity, and identity security.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    overview: 'Cyber resilience engineered from the ground up. We protect Australian organisations against ransomware, credential theft, and supply chain threats with practical, verifiable security controls.',
    capabilities: [
      'ACSC Essential Eight Maturity Level 1 to 3 Alignment & Remediation',
      'Microsoft Entra ID (Azure AD) P1/P2 Identity Governance & Privileged Access Management (PIM)',
      'Microsoft Defender for Endpoint, Identity, Office 365, and Cloud Apps',
      'Zero Trust Network Access (ZTNA) & Secure Access Service Edge (SASE)',
      'Security Operations Center (SOC) Log Integration & Incident Response Playbooks',
      'Vulnerability Management, Patch Cadence, and Third-Party Risk Assessments'
    ],
    deliverables: 'Essential Eight gap assessment report, executive risk dashboard, prioritized remediation roadmap, and real-time security posture monitoring.'
  },
  infrastructure: {
    title: 'IT Infrastructure Engineering',
    tagline: 'Resilient network switches, firewalls, server virtualisation, and hybrid compute.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    overview: 'Solid physical and virtualised foundation engineered for 99.99% uptime. We design, deploy, and modernize high-throughput core switching, next-gen firewalls, and hyperconverged infrastructure.',
    capabilities: [
      'Enterprise SD-WAN & Multi-Site MPLS Redundancy (Cisco, Fortinet, Meraki)',
      'Next-Generation Firewall (NGFW) Architecture, SSL Inspection & IPS/IDS',
      'Hyper-V & VMware Infrastructure Modernisation and SAN Storage Tuning',
      'High-Density Wi-Fi 6E/7 Site Surveys, RF Optimisation & Access Control',
      'Data Centre Co-location, Rack Architecture & Structured Cabling Standards',
      'Proactive Network Telemetry, SNMP Monitoring & Automated Failover Testing'
    ],
    deliverables: 'Physical & logical network topology diagrams, configuration backups, cable schedules, failover validation reports, and hardware lifecycle plans.'
  },
  consulting: {
    title: 'IT Consulting & Architecture',
    tagline: 'Vendor-independent technology roadmaps, IT due diligence, and enterprise architecture.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    overview: 'Bridging business strategy with pragmatic engineering execution. We advise Australian boards, CEOs, and CIOs on technology investments, regulatory compliance, and scalable architectural roadmaps.',
    capabilities: [
      'Strategic 3-to-5 Year Technology Master Plans & Investment Roadmaps',
      'Mergers & Acquisitions (M&A) IT Due Diligence and Systems Consolidation',
      'Enterprise Architecture Reviews (TOGAF Alignment & Technical Debt Audit)',
      'Disaster Recovery (DR) and Business Continuity Plan (BCP) Simulation Drills',
      'Vendor Selection, RFP Formulation, and Contract Benchmarking',
      'Virtual CIO (vCIO) & Senior Technical Advisory for Mid-Market Enterprises'
    ],
    deliverables: 'Comprehensive architecture strategy document, board-ready executive summaries, financial TCO models, and phased implementation roadmaps.'
  },
  automation: {
    title: 'AI & Business Automation',
    tagline: 'Practical process automation, Power Platform workflows, and secure enterprise AI.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    overview: 'Deploy secure, practical intelligence that eliminates repetitive manual tasks. We leverage Microsoft Power Platform and Azure AI services to build compliant, high-ROI business automations.',
    capabilities: [
      'Microsoft Power Automate Enterprise Workflow Engineering',
      'Secure Azure OpenAI & Copilot Studio Enterprise Deployment',
      'Custom API Integrations & ERP/CRM Data Synchronisation',
      'Intelligent Document Processing (OCR, Invoice Extraction, Metadata Tagging)',
      'Governance Frameworks for Data Security & Responsible AI Use',
      'Automated Monitoring & Exception Handling Alerts'
    ],
    deliverables: 'Production-ready automated flows, governance policy documentation, API swagger definitions, and measurable time-saving analytics.'
  }
};

function initServiceModals() {
  const modalBackdrop = document.getElementById('serviceModalBackdrop');
  const modalContainer = document.getElementById('serviceModalContent');
  const closeBtn = document.getElementById('serviceModalClose');
  if (!modalBackdrop || !modalContainer || !closeBtn) return;

  const openButtons = document.querySelectorAll('[data-service-key]');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-service-key');
      const data = SERVICE_DETAILS[key];
      if (!data) return;

      modalContainer.innerHTML = `
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
          <div style="width:48px; height:48px; border-radius:12px; background:var(--color-mint-light); border:1px solid var(--color-mint); display:flex; align-items:center; justify-content:center; color:var(--color-forest);">
            ${data.icon}
          </div>
          <div>
            <h3 style="font-size:1.5rem; margin-bottom:4px; color:var(--color-forest);">${data.title}</h3>
            <p style="font-size:0.875rem; color:var(--color-sage-soft); font-weight:600;">${data.tagline}</p>
          </div>
        </div>

        <p style="font-size:1rem; color:var(--color-charcoal); line-height:1.65; margin-bottom:24px;">
          ${data.overview}
        </p>

        <h4 style="font-size:1rem; font-weight:700; color:var(--color-forest); margin-bottom:12px; text-transform:uppercase; letter-spacing:0.04em;">
          Key Engineering Capabilities:
        </h4>
        <ul style="margin-bottom:24px; display:flex; flex-direction:column; gap:8px;">
          ${data.capabilities.map(cap => `
            <li style="display:flex; align-items:flex-start; gap:10px; font-size:0.9375rem; color:var(--color-charcoal);">
              <span style="color:var(--color-sage); font-weight:bold; line-height:1.2;">✓</span>
              <span>${cap}</span>
            </li>
          `).join('')}
        </ul>

        <div style="background:var(--color-warm-white); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:16px; margin-bottom:28px;">
          <strong style="display:block; font-size:0.8125rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--color-forest); margin-bottom:4px;">
            Engineering Deliverables:
          </strong>
          <span style="font-size:0.875rem; color:var(--color-charcoal-muted); line-height:1.5;">
            ${data.deliverables}
          </span>
        </div>

        <div style="display:flex; gap:14px; flex-wrap:wrap;">
          <a href="#contact" class="btn btn-primary" onclick="selectServiceInContact('${key}')">
            Enquire About This Service
          </a>
          <a href="tel:0466373114" class="btn btn-secondary">
            Call 0466 373 114
          </a>
        </div>
      `;

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

// Helper to pre-select service in contact form from modal
window.selectServiceInContact = function(key) {
  const modalBackdrop = document.getElementById('serviceModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  const select = document.getElementById('contactService');
  if (select) {
    const valueMap = {
      azure: 'Cloud & Azure Infrastructure',
      m365: 'Microsoft 365 & Modern Workplace',
      cybersecurity: 'Cybersecurity & Identity',
      infrastructure: 'IT Infrastructure Engineering',
      consulting: 'IT Consulting & Architecture',
      automation: 'AI & Business Automation'
    };
    if (valueMap[key]) {
      select.value = valueMap[key];
    }
  }

  const target = document.getElementById('contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================================================
   Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  if (!form || !alertBox) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting Enquiry...';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    if (!data.name || !data.email || !data.phone) {
      alertBox.className = 'form-alert error';
      alertBox.textContent = 'Please fill out your Name, Email, and Phone number.';
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    try {
      // Direct Web3Forms submission to aseladecosta@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b94dfab8-10ea-444a-810a-cb8b2521d894', // Web3forms token for AusNet
          subject: `AusNet IT Enquiry from ${data.name} (${data.company || 'Direct'})`,
          from_name: data.name,
          ...data
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alertBox.className = 'form-alert success';
        alertBox.innerHTML = `
          <strong>Thank you, ${data.name}.</strong> Your enquiry has been received. A senior engineer will review your requirements and respond within 1 business day. For urgent matters, please call <a href="tel:0466373114" style="text-decoration:underline; font-weight:700;">0466 373 114</a>.
        `;
        form.reset();
      } else {
        // Fallback email client launch
        handleMailtoFallback(data, alertBox);
      }
    } catch (err) {
      handleMailtoFallback(data, alertBox);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

function handleMailtoFallback(data, alertBox) {
  const subject = encodeURIComponent(`AusNet IT Enquiry: ${data.service || 'General'} - ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\n` +
    `Company: ${data.company || 'N/A'}\n` +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n` +
    `Service: ${data.service || 'Not specified'}\n\n` +
    `Message:\n${data.message || 'No additional message provided.'}`
  );

  alertBox.className = 'form-alert success';
  alertBox.innerHTML = `
    Enquiry prepared. You can also send directly via email: <a href="mailto:info@ausnetit.com.au?subject=${subject}&body=${body}" style="text-decoration:underline; font-weight:700;">Click here to send email</a> or call <a href="tel:0466373114" style="text-decoration:underline; font-weight:700;">0466 373 114</a>.
  `;
}

/* ==========================================================================
   Smooth Scrolling for Anchor Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
