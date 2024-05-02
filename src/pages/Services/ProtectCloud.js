import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import { AiOutlineWarning } from "react-icons/ai";
import SEO from "../../components/seo.js";
import BusinessCrumbs from "../../components/Home/BusinessCrumbs.js";
import { useForm } from "react-hook-form";
import SvgAnimation from "../../components/SvgAnimate.js";

const ProtectCloud = () => {
  // const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [isOpen, setNav] = useState(true);
  const toggleTab = () => {
    setNav((isOpen) => !isOpen);
  };
  const onTop = () => {
    window.scroll(0, 0);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [hideAlert, SetHideAlert] = useState(true);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const msgAlrt = useRef(null);
  useEffect(() => {
    setTimeout((hideAlert) => {
      SetHideAlert(hideAlert);
      // SetHideAlert(true);
      const hdMsg = document.getElementById("msgAlert");
      // msgAlrt.current.style.display = "none";
    }, 15000);
  });

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Synectiks Secure Cloud Hosted Services supports a variety of workloads & Disaster Recovery with a high degree of control, security and simplicity. Support your mission-critical applications and workloads with instant and scalable infrastructure. With Synectiks Cloud Hosted Services, you can focus on your business needs instead of spending the time and money it takes to plan, procure, secure and manage the right infrastructure to meet your application demands."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/protect-cloud/index.html"
        />
      </Helmet>
      <SEO title="Protect  Cloud" />
      <div className="bg-lightgrey">
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BusinessCrumbs
              title="Home"
              subtitle="Business Continuity & Cyber Security"
              pageTitle="Protect Cloud"
            />
            <div className="d-flex flex-column flex-md-row mt-4">
              <div className="Pc-left pe-md-5 mb-3">
                <h1>Protect Cloud</h1>
                <p>
                  Protect Cloud is a SaaS based readily available Innovative and
                  powerful web-based ALL-IN-ONE solution, with one-agent on any
                  given Server/End-point device to serve all{" "}
                  <a href="/cloud-backup-service/index.html">Backup</a> &{" "}
                  <a href="/cloud-disaster-recovery-service/index.html">
                    Disaster Recovery{" "}
                  </a>
                  needs along with basic necessary features like Anti-Virus,
                  Anti-Malware, Vulnerability Assessment, Patch management,
                  Remote Diagnostic assistance and URL-filtering. All devices in
                  your infrastructure are easily managed from a single web
                  console and well protected to meet all Business continuity,
                  Security, and compliance requirements.
                </p>
                <p>
                  Maintain all the basic security and protection features with a
                  single solution, and avoid the hassle of purchasing software
                  from multiple vendors and installing multiple agents on the
                  same machine. Pick and choose the required license type for
                  each server/end-point device from the following, mix and match
                  the licenses as needed for each device in your environment.
                </p>
              </div>
            </div>
            <div className="mt-2 svg-animation w-60  m-auto">
              <SvgAnimation />
            </div>
            <p className="lineHeight-24 ptext mb-5">
              Eliminate security breaches, downtime and data loss. Protect Cloud
              is the only solution that natively integrates cloud security, data
              protection and management to protect endpoints, systems and data.
              Integration and automation provide unmatched protection, making it
              simple to manage all the devices in your environment.
            </p>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var vvfc_BaseURL = (("https:" == document.location.protocol) ? "https://forms.id-visitors.com/FrontEndWeb/" : "http://forms.id-visitors.com/FrontEndWeb/");
var vvfc_ServiceURL = vvfc_BaseURL + 'ProcessFormCapture.aspx';
var vvfc_ScriptURL = vvfc_BaseURL + 'Scripts/vvfcscript.js';
var trackedForms = ['Protectform'];
var options = { accountId: 'q00IB13hyn', serviceURL: vvfc_ServiceURL, pollInterval: 5000,
forms: [{ id: 'Protectform', ignoreFields: ['__VIEWSTATE', '__VIEWSTATEGENERATOR', '__EVENTVALIDATION'], accountFormId: '608098e368b5f7088c48551f' } ]};
(function (src) {
var vvscript = document.createElement('script');
vvscript.type = 'text/javascript';
vvscript.async = true; vvscript.src = src;
var scriptElements = document.getElementsByTagName('script');
var lastScriptElement = scriptElements[scriptElements.length - 1];
lastScriptElement.parentNode.insertBefore(vvscript, lastScriptElement.nextSibling);
})(vvfc_ScriptURL);

`,
        }}
      />
    </Layout>
  );
};

export default ProtectCloud;
