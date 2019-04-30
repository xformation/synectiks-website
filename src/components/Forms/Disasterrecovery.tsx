import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";

export const Disasterrecovery: React.StatelessComponent<{}> = () => {
    return (
        <div>        
            
            <div className='bg-theme mt-3'>
            <h1 className='text-center text-white pt-theme mt-2'>DISASTER RECOVERY</h1>
            </div>
            <div className="px-5 pt-5">
            <p className='lineHeight-24'>
            Background - As we all know, a potential business disorder will directly impact CAPEX and OPEX of the business. 
            When a proper disaster recovery plan is set, any business can continue to run its critical operations without thwarting their customer expectations. 
            That is exactly what we offered Indian defense, 
            a solution that can manage and provide necessary outcomes in case of any DR issues.
            </p><br/>
            </div>
            <div className='bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12'>

            <div className='col-md-4'>
            <h3>Sector - Defence</h3>
            <p>Automobiles</p>
            </div>
            <div className='col-md-4 border-block'>
            <h3 >BUSINESS OBJECTIVE</h3>
            <p  className='px-2'>Transformation towards becoming hardware / Os / Vender / Operation agnostic. 
             Make everything software defined.</p>
            </div>
            <div className='col-md-4'>
            <h3 >Technologies</h3>
            <p>AWS, Infrastructure as a code, 
microservices, devops</p>
            </div>

            </div>

            <div className="p-5">
            <h2>Overview</h2>
            <p className='lineHeight-24'>
            As we all know, a potential business disorder will directly impact CAPEX and OPEX of the business. 
            When a proper disaster recovery plan is set, any business can continue to run its critical operations without thwarting their customer expectations. 
            That is exactly what we offered Indian defense, 
            a solution that can manage and provide necessary outcomes in case of any DR issues.   </p>

            <h2>Challenges</h2>
            <p className='lineHeight-24'>                        
            The Indian defense had only 4 Mbps site to site leased line for data transfer.<br/>
            They were using email, intranet, and few BPM applications on SAN-based storage.<br/>
            They were not comfortable to use array-based replication neither the FCIP based switch communication.<br/>
            They were expecting a lightweight, script-based DR solution, that is managed with ease and extended as per requirements and with the SLA that is less than 10min.
            </p>
            <h2>Solutions</h2>
            <p className='lineHeight-24'>
            <ul>
           <li>Thorough planning and execution proved to be successful. Firstly, we used copy-on-write technology advantage that takes an incremental snapshot on a purpose-built storage.</li>
           <li>We performed deduplication of that snapshot and transferred across the site by simple Zfs send-receive.</li>
           <li>In case of failover, we could recover application instantly- since it is mare mount of the filesystem, so recovery time was almost zero.</li>
           <li>We used some open source tools that work together with some simple scripting and automation and deliver the required solution.</li>
           <li>The solution is extracted from components like snapshot engine- pool provisioning –Zfs based storage and virtualization technique.</li>
           <li>The all in one solution comes with the freedom to unlimited extension/customization.</li>           
           </ul>
            </p>
            
            <p className='lineHeight-24'>
            <b>That old Cliché “DR is resilient enough to implement in one go” we proved it wrong!</b><br/>
            Designing and deploying a total DR solution was not a rocket science for us. 
            However, there were few challenges to face though; we had only 4 Mbps site to site leased line for data transfer. 
            Due to pricing aspect, the Indian defense was neither ready to accept array-based replication or the FCIP based switch communication. 
            They wanted a lightweight solution and a script based DR solution to manage their tasks effortlessly. With all these hurdles on the path, 
            we managed to script a DR solution that is open and restores the data in DR site. In case of a network latency or a failure, 
            Indian defense could recover the application in no time and the recovery time is almost zero.
            </p>

            <h2>OUTCOME</h2>
            <p className='lineHeight-24'>
           The DR solution was 10% low compared to a licensed DR product.
           They were able to restore the data instantly and the recovery time was less than 10 min which is almost zero.
           The lightweight script was easily adaptable and manageable.
            </p>


            </div>

       
       
        </div>

    );
};

export default Disasterrecovery;
