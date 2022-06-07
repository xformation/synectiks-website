import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Swal from 'sweetalert2';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from 'react-image-magnifiers';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from 'reactstrap';
import { FaBars } from 'react-icons/fa';
import {
  AiOutlineCheck,
  AiOutlineLine,
  AiOutlineWarning
} from 'react-icons/ai';
import '../../components/layout.css';
import styled from 'styled-components';
import self from '../../images/ManagedBackup/Self Service Portal.png';
import cloudImaged from '../../images/synectiks-secure/baas.jpg';
import security from '../../images/ManagedBackup/Security.png';
import geolocation from '../../images/ManagedBackup/MultipleSecureGeoLocations.png';
import backupStorage from '../../images/ManagedBackup/BackupStorage.png';
import efficientStorage from '../../images/ManagedBackup/EfficientBackupStorageUsage.png';
import protection from '../../images/ManagedBackup/ProtectionforAnyworkload.png';
import restore from '../../images/ManagedBackup/Restore.png';
// import support from '../../images/ManagedBackup/Support.png';
import price from '../../images/ManagedBackup/affordableprice.png';
import ARP from '../../images/ManagedBackup/Availability&ReliablePerformance.png';
import MS from '../../images/ManagedBackup/MigrationServices.png';
import SCR from '../../images/ManagedBackup/HSecurity.png';
import SPT from '../../images/ManagedBackup/HSupport.png';
import CS from '../../images/Hybrid/Compliance&Security.png';
import WO from '../../images/Hybrid/Optimization Service.png';
import EA from '../../images/Hybrid/Extreme Automation.png';
import HostedInfra from '../../images/ManagedBackup/HostedInfra.png';
import HW from '../../images/ManagedBackup/Hostanyworkload.png';
import MSGL from '../../images/ManagedBackup/MultiSecureGeoLocations.png';
import ST from '../../images/ManagedBackup/StorageTypesavailable.png';
import AP from '../../images/ManagedBackup/AffordablePricing.png';
import ADT from '../../images/Hybrid/ApplicationDevelopmentandTesting.png';
import agent from '../../images/oneAgentForall.svg';
import complete from '../../images/CompleteProtection.svg';
import support from '../../images/synectiks-secure/support.svg';
import EndComputing from '../../images/EndComputing.svg';
import EndSecurity from '../../images/EndSecurity.svg';
import DigitalWorkspace from '../../images/DigitalWorkspace.svg';
import ProCloud from '../../images/Protect_Cloud_Updated.jpg';
import largeImg from "../../images/large-img.png";
import smallImg from '../../images/small-img.png'
import vdi from '../../images/protect-cloud.jpg';
import timg from '../../images/table-img.png';
import protectSvg from '../../images/protect-cloud/protect-cloud.svg'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Collapse,
  NavbarToggler,
  Navbar
} from 'reactstrap';
import SEO from '../../components/seo.js';
import BusinessCrumbs from '../../components/Home/BusinessCrumbs.js';
import { useForm } from 'react-hook-form';
import SvgAnimation from '../../components/SvgAnimate.js'

const postData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 100);
  });
};

const ProtectCloud = () => {
  // const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [isOpen, setNav] = useState(true);
  const toggleTab = () => {
    setNav(isOpen => !isOpen);
  };
  const onTop = () => {
    window.scroll(0, 0);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const submitForm = async data => {
    console.log('Submission starting', data);
    const result = await postData(data);
    console.log('Submitting complete', result.success);
    setIsSuccessfullySubmitted(result.success);
    reset();
    console.log(data);
  };

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
      <ProctectCloudWrapper>
        <SEO title="Protect  Cloud" />
        <div className="bg-lightgrey container-fluid p-0">
          <div className="text-justify">
            <BusinessCrumbs
              title="Home"
              subtitle="Business Continuity & Cyber Security"
              pageTitle="Protect Cloud"
            />
            <h1>Protect Cloud</h1>
          </div>
          <Row className="d-flex justify-content-start px-0 px-md-3">
            <div className="px-2 px-md-0 mb-3 col-md-12">
              <div className="bg-lightgrey mb-0 pb-3">
                <div className="">
                <p>
                      Protect Cloud is a SaaS based readily
                      available Innovative and powerful web-based ALL-IN-ONE
                      solution, with one-agent on any given Server/End-point
                      device to serve all <a href='/cloud-backup-service/index.html'>Backup</a> & <a href='/cloud-disaster-recovery-service/index.html'>Disaster Recovery </a>needs along
                      with basic necessary features like Anti-Virus,
                      Anti-Malware, Vulnerability Assessment, Patch
                      management, Remote Diagnostic assistance and
                      URL-filtering. All devices in your infrastructure are
                      easily managed from a single web console and well
                      protected to meet all Business continuity, Security, and
                      compliance requirements.
                    </p>
                    <p>
                      Maintain all the basic security and protection features
                      with a single solution, and avoid the hassle of purchasing
                      software from multiple vendors and installing multiple
                      agents on the same machine. Pick and choose the required license type for each
                      server/end-point device from the following, mix and match
                      the licenses as needed for each device in your
                      environment.
                    </p>
                  <div>
                    {/* <h5 className="ft text-center"><strong>Features Comparison In Detail</strong></h5> */}
                    <div className='svg-animation'>
                    <SvgAnimation/>
                    </div>
                    <div className="table-img my-3 my-md-0 text-center">
                            {/* <img src={protectSvg} alt='Protect Cloud'/> */}
                      {/* <div className='magni-img'>
                        <GlassMagnifier
                          imageSrc="https://res.cloudinary.com/papu/image/upload/b_rgb:e8e8e8/v1626951869/synectiks-website/Protect_Cloud_1_bp66ra_wu3pgq.jpg"
                          imageAlt="Example"
                          largeImageSrc="https://res.cloudinary.com/papu/image/upload/b_rgb:ececec/v1626951869/synectiks-website/Protect_Cloud_1_bp66ra_wu3pgq.jpg" // Optional
                          magnifierSize ='45%'
                          square= 'true'
                        />
                      </div> */}

                      {/* <div style={{ width: '700px', margin: '0 auto' }}>
                        <Magnifier
                          imageSrc="https://res.cloudinary.com/papu/image/upload/v1626334354/synectiks-website/Protect_Cloud-thumb_ri0kr1.jpg"
                          imageAlt="Example"
                          largeImageSrc="https://res.cloudinary.com/papu/image/upload/c_scale,w_1024/v1626266094/synectiks-website/Protect_Cloud_djjrco.webp" // Optional
                          mouseActivation={MOUSE_ACTIVATION.CLICK} // Optional
                          touchActivation={TOUCH_ACTIVATION.TAP}
                           // Optional
                        />
                      </div> */}
                      {/* <img src={timg} alt="" /> */}
                      {/* <img
                        src="https://res.cloudinary.com/papu/image/upload/c_scale,w_1024/v1626266094/synectiks-website/Protect_Cloud_djjrco.webp"
                        alt=""
                        className="rnd-pic"
                      /> */}
                      {/* <img src={circleProduct} alt="" className="rnd-pic" /> */}
                    </div>
                    {/* <Table border="1" className="protect-table">
                      <thead rowspan="2">
                        <th />
                        <th className="tdfont bxl bxr">Features</th>
                        <th colspan="3" className="tdfont bxr">
                          Protected Cloud
                          <td className="tdwidth b">Essential</td>
                          <td className="tdwidth b">Standard</td>
                          <td className="tdwidth b">Advanced</td>
                        </th>
                        <th colspan="2" className="tdfont bxr">
                          Backup Cloud
                          <td className="tdwidth b">Standard</td>
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <th rowspan="13" className="tdfont">
                            Backup:
                          </th>
                          <td>
                            Workstations, Servers (Windows, Linux, Mac) backup
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>Virtual machine backup</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>File backup </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>Image backup </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Standard application backup (Microsoft 365, G Suite,
                            Microsoft Exchange, Microsoft SQL, Microsoft
                            SharePoint)
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Advanced application backup (Microsoft SQL and
                            Microsoft Exchange clusters, Oracle DB, SAP HANA)
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>Network share backup </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Backup options (Backup Window, multi-destination,
                            retention)
                          </td>
                          <td className="tdwidth">Limited</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>Backup to local storage</td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>Backup to cloud storage</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Cloud storage included into device license (amount
                            depends on device type and edition)
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>Data protection map </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>Disaster Recovery optional Add-on Feature</td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>

                        <tr>
                          <th
                            rowspan="3"
                            className="tdfont bgclr border-secondary border-top border-bottom"
                          >
                            Security:
                          </th>
                          <td>
                            Vulnerability assessment (VA) and patch management
                            (PM)
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">VA Only</td>
                        </tr>
                        <tr>
                          <td>
                            Antivirus and anti-malware protection, Exploit
                            prevention, URL filtering
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Forensic mode, scan backups for malware, safe
                            recovery, corporate whitelist
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <th rowspan="6" className="tdfont">
                            Protection Management:
                          </th>
                          <td>Group management of devices</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>Centralized plans management</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>Dashboards and reports</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                        </tr>
                        <tr>
                          <td>Drive health monitoring</td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>Remote desktop and Remote assistance</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                        <tr>
                          <td>Software and hardware inventory*</td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineCheck />
                          </td>
                          <td className="tdwidth">
                            <AiOutlineLine />
                          </td>
                        </tr>
                      </tbody>
                    </Table> */}
                  </div>

                  <div>
                  <div className="text-center mt-3 mb-0">
                    Request for a
                    <span className="text-black bold">&nbsp;Quick Demo</span>
                  </div>

                  <div className="text-black py-2 py-md-4">
                    <form
                      form="Protectform"
                      id="Protectform"
                      name="Protectform"
                      className="was-validated"
                      action="#"
                      onSubmit={handleSubmit(submitForm)}
                    >
                      <div className="row">
                        <div className="text-left  col field-group">
                          <label htmlFor="name">Your Name *</label>
                          <input
                            id="name"
                            maxlength="80"
                            size="20"
                            type="text"
                            {...register('first_name', {
                              required: true,
                              minLength: 2,
                              MaxLength: 80
                            })}
                            disabled={isSubmitting || isSuccessfullySubmitted}
                          />
                          <div className="error">
                            {errors.first_name && (
                              <div className="d-flex align-items-baseline">
                                <AiOutlineWarning className="mr-2" />
                                <p>Enter Your Name</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-left  col field-group">
                          <label for="email">Email *</label>
                          <input
                            id="email"
                            size="20"
                            type="text"
                            {...register('email', {
                              required: true,
                              pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
                              }
                            })}
                            size="20"
                            type="text"
                            disabled={isSubmitting || isSuccessfullySubmitted}
                          />
                          <div className="errorml">
                            {errors.email && (
                              <div className="d-flex align-items-baseline">
                                <AiOutlineWarning className="mr-2" />
                                <p>Enter Your Email Id</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-left  col field-group">
                          <input
                            type="submit"
                            name="submit"
                            value="Submit"
                            className="btn btn-primary w-100 pos-3"
                            id="submit-btn"
                          />
                        </div>
                      </div>
                      {isSuccessfullySubmitted && (
                        <div className="alert alert-success" role="alert">
                          <div className="text-center">
                            <h1 className="alert-heading text-capitalize text-center">
                              We have recieved your request for demo
                            </h1>
                            <hr />
                            <h3 className="text-capitalize text-center">
                              we will get back to you soon !
                            </h3>
                          </div>
                        </div>
                      )}
                    </form>


                    <p className="lineHeight-24 ptext mt-md-4 mt-1">
                      Eliminate security breaches, downtime and data loss.
                      Protect Cloud is the only solution that natively
                      integrates cloud security, data protection and management
                      to protect endpoints, systems and data. Integration and
                      automation provide unmatched protection, making it simple
                      to manage all the devices in your environment.
                    </p>


                  </div>
                  <div className="pr-img">
                    {/* <img
											className='w85 my-4 mx-auto'
											src={ProCloud}
											alt='Antivirus,Anti-Malware,Exploit Prevention,Ransomware Protection,Security Vulnerability Assessment,Patch Management,URL-filtering,Data protection Map,Remote desktop & Remote assistance,Backup,Disaster Recovery'
										/> */}
                  </div>
                    {/* <p>
                      Contact us for a <span style={{color: "#007BFF", cursor: 'pointer'}} onClick = {(e) => {
                        let names = document.getElementById('name');
                          names.focus()
                      }}>Quick Demo</span> and check out all Protect
                      Cloud rich security features and how to manage all
                      end-devices in an environment using SaaS based readily
                      available web-console.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </ProctectCloudWrapper>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
`
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

`
        }}
      />
    </Layout>
  );
};

export default ProtectCloud;

const ProctectCloudWrapper = styled.div`
  .protect-table {
    display: none;
  }
  .svg-animation{
    width: 100%;
    margin: 0 auto;
  }
  .table-img {
    display: block;
    img {
      width: 100%;
    }
  }
  td {
    font-size: 12px;
  }
  .table td,
  .table th {
    padding: 5px;
  }
  .bxl {
    border-left: 2px solid white;
  }
  .bxr {
    border-left: 2px solid white;
  }
  table.table {
    font-size: 12px;
  }
  .bx {
    border: 5px solid white;
    box-shadow: 0px 0px 9px 0px black;
  }
  .w75 {
    width: 100%;
  }
  .w85 {
    width: 100%;
  }
  .pcenter {
    text-align: center;
  }
  padding: 2rem 1rem;
  .topNav {
    position: fixed;
    top: 97px;
    z-index: 1;
    background: white;
    width: 100%;
    left: 2%;
  }
  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0);
  }
  ul,
  h1,
  h2,
  h6 {
    text-align: left;
  }
  .ptext {
    text-align: left !important;
  }
  h4,
  h5,
  h3 {
    text-align: center;
  }

  .w-sm-100 {
    width: 100%;
  }
  .hybridFixed {
    position: fixed;
    top: 6rem;
    left: 0;
    z-index: 99;
  }
  a#bgL,
  a#bgLL,
  a#bgLLL {
    padding: 0.5rem 1.5rem;
    font-size: 12px;
    height: auto;
    text-align: left;
    cursor: pointer;
  }
  a#bgL.active,
  a#bgLL.active,
  a#bgLLL.active {
    text-align: left;
    border-radius: 0px;
    padding: 0.5rem 1.5rem;
    font-size: 12px;
    height: auto;
    width: 100%;
    color: white;
  }
  .imgHyb {
    margin-right: 25px !important;
    width: 55px !important;
    z-index: 999;
    position: relative;
  }
  .one {
    z-index: 99999;
    background: white;
    width: 100%;
  }
  .one:hover {
    z-index: 99999;
    background: rgb(0, 124, 194);
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-nav .nav-link:hover {
    color: white;
  }

  ul.tabList.nav.flex-column {
    position: relative;
    z-index: 99999;
    width: 100%;
    left: 0rem;
  }
  .tabList {
    display: block;
    margin-bottom: 4rem;
  }
  .tabsHide {
    display: none;
    margin-bottom: 4rem;
  }
  h1 {
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  .hybmt {
    margin-top: 2.5rem;
  }
  /* .nav-link.active {
		background: rgba(0, 0, 0, 0);
	} */
  .logo-btn {
    font-size: 2rem;
    background: white;
    border: none;
    outline: none;
    width: 100vw;
    padding: 0.6rem;
    text-align: left;
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.5);
  }

  .logo-btn:hover {
    cursor: pointer;
  }
  .tab-content > .active {
    padding: 0rem;
  }
  .w-6 {
    width: 6rem;
  }
  .w-7 {
    width: 7rem;
  }
  .w-8 {
    width: 8rem;
  }
  .position-relative {
    top: 2rem;
  }
  .w-12 {
    width: 25%;
  }
  .magni-img{
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 576px) {
    .protect-table {
      display: none;
    }
    .svg-animation{
    width: 100%;
    margin: 0 auto;
  }
    .table-img {
      display: block;
      img {
        width: 100%;
      }
    }
    tr:nth-child(even) {
      background: #ccc;
    }
    .bgclr {
      background: #f7f8fb !important;
      border-top: 1px solid balck;
      border-bottom: 1px solid balck;
    }
    .table thead th {
      vertical-align: middle;
      border-bottom: 2px solid #dee2e6;
      background: #007cc2;
      color: white;
    }
    .tdfont {
      font-size: 14px;
      text-align: center;
    }
    .tdwidth {
      width: 8rem !important;
      font-weight: normal;
      text-align: center;
      padding: 0px;
    }
    .b {
      border: 0px !important;
    }
    .splhead {
      font-size: 1.3rem !important;
      line-height: 1.4;
    }
    .w75 {
      width: 60%;
    }
    .w85 {
      width: 85%;
    }
    .pcenter {
      text-align: left;
    }
    .ptext {
      text-align: justify !important;
    }
    padding: 2.5rem 4rem;
    .topNav {
      position: relative;
      top: 0px;
      z-index: 1;
      width: auto;
      left: 0px;
    }
    .one {
      z-index: 99999;
      background: white;
      width: auto;
    }
    .w-12 {
      width: 5rem;
    }
    ul {
      text-align: justify;
    }
    h1,
    h2,
    h4,
    h5,
    h3 {
      text-align: left;
    }
    .w-sm-100 {
      width: 75%;
    }
    .w-2vh {
      width: 15vw;
    }
    .w-8vh {
      width: 75vw;
    }
    .nav-link.active {
      background: var(--synectiksBlue);
      color: var(--synectiksWhite);
    }
    .w-85 {
      width: 100%;
      border: 1px solid var(--textColor);
      background: var(--synectiksWhite);
      justify-content: space-between;
    }
    .w-10 {
      width: 7%;
      float: left;
      margin-right: 2rem;
      margin-bottom: 2rem;
    }
    .wsprt {
      width: 10%;
      float: left;
      margin-right: 2rem;
      margin-bottom: 2rem;
    }
    .w-15 {
      width: 15%;
      float: left;
      margin-right: 1.7rem;
      margin-bottom: 2rem;
    }
    .imgSize {
      width: 15%;
      float: left;
      margin-right: 2rem;
      margin-bottom: 2rem;
    }

    ul.nav.flex-column {
      position: relative;
      z-index: 99999;
      width: 100%;
      /* width: 25vw; */
      left: 0rem;
    }
    .tabList {
      display: block;
    }
    .tabsHide {
      display: block;
    }
    ul.nav.flex-column > li > a {
      width: 100%;
      color: rgba(0, 0, 0, 0.8);
      height: 10vh;
      font-size: 14px;
      cursor: pointer;
      /* padding-left: 3.2rem; */
    }
    ul.nav.flex-column > li > a {
      width: 100%;
      color: rgba(0, 0, 0, 0.8);
      height: 10vh;
      font-size: 15px;
      cursor: pointer;
    }
    .tab-content > .active {
      padding-top: 0rem;
      /* padding-right: 4rem;
			padding-left: 4rem; */
      padding-bottom: 2rem;
    }
    a#bgL,
    a#bgLL,
    a#bgLLL {
      padding: 0.5rem 2.5rem !important;
      text-align: left;
      font-size: 14px;
    }

    .logo-btn {
      display: none;
    }
    .himage {
      width: 50%;
      height: auto;
      box-shadow: 5px 5px 5px #789;
      float: left;
      margin-right: 2rem;
      margin-bottom: 10px;
    }

    .hbh1 {
      font-size: 2.5rem;
    }
    .hybridFixed {
      display: block;
      height: auto;
      position: sticky;
      top: 16%;
      padding-bottom: 21.4rem;
      padding-top: 2.4rem;
    }
    .nav-item > a.active,
    .nav-item > a:active {
      height: auto;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    .magni-img{
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .protect-table {
      display: block;
    }
    .svg-animation{
    width: 80%;
    margin: 0 auto;
  }
    .table-img {
      display: block;
      img {
        width: 50%;
        display: block;
        margin: 0 auto;
      }
    }
    a#bgL.active:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      ypointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: var(--synectiksBlue);
      border-width: 20px;
      margin-left: -20px;
    }
    a#bgL.active {
      border-bottom: 5px solid #007cc2;
      position: relative;
      /* padding-left: 1rem !important; */
      /* background: bgBlue !important; */
      font-size: 14px;
    }
    a#bgLL.active {
      border-bottom: 5px solid #007cc2;
      position: relative;
      /* padding-left: 1rem !important; */
      /* background: bgBlue !important; */
      font-size: 14px;
    }
    a#bgLL.active:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: var(--synectiksBlue);
      border-width: 20px;
      margin-left: -20px;
    }
    a#bgLLL.active {
      position: relative;
      border-bottom: 5px solid #007cc2;
      /* padding-left: 1rem !important; */
      /* background: bgBlue !important; */
      font-size: 14px;
    }
    a#bgLLL.active:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: var(--synectiksBlue);
      border-width: 20px;
      margin-left: -20px;
    }
    .himage {
      width: 100%;
      height: auto;
      box-shadow: 5px 5px 5px #789;
      margin-right: 2rem;
      margin-bottom: 10px;
    }
    .magni-img {
      width: 45%;
      margin: 2rem auto;
    }
  }
  @media (min-width: 1024px) {
    .himage {
      width: 50%;
      height: auto;
      box-shadow: 5px 5px 5px #789;
      float: left;
      margin-right: 2rem;
      margin-bottom: 10px;
    }
    .magni-img {
      width: 45%;
      margin: 2rem auto;
    }
  }
`;