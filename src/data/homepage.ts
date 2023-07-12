import { paraSpec } from "./rtl.utils";

export interface groupSpec{
    title?:string;
    paragraphs:paraSpec[]
}
export const homePageData:groupSpec[] = [
    {
        title:'Privacy Policy',
        paragraphs:[
            {
                text:`
                This Privacy Policy governs the manner in which CoReader ("we" or "our") collects, uses, stores, and protects personal information within the CoReader mobile application ("the App").
                <br>               
                <br>               Information Collection and Usage:
                <br>               
                <br>               The App does not collect any personal information from users, nor does it transmit any data to our servers or any third parties. All data generated or provided by users is stored locally on their device.
                <br>               
                <br>               Data Security:
                <br>               
                <br>               We take reasonable measures to protect the security and integrity of user data within the App. However, please note that no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
                <br>               
                <br>               User Rights:
                <br>               
                <br>               As the App does not collect personal information, there are no specific user rights related to data access, correction, or deletion. Users have full control over the data stored within the App on their own device.
                <br>               
                <br>               Third-Party Services:
                <br>               
                <br>               The App does not integrate or utilize any third-party services or APIs that may collect user data.
                <br>               
                <br>               Updates to the Privacy Policy:
                <br>               
                <br>               We may update or modify this Privacy Policy from time to time. Any changes will be effective when we provide notice within the App or through other reasonable means. It is your responsibility to review the Privacy Policy periodically for any updates.
                <br>               
                <br>               Contact Us:
                <br>               
                <br>               If you have any questions or concerns about this Privacy Policy or our practices regarding user data, please contact us at
                <br>               <a href="mailto:hardikraj08@gmail.com">
                hardikraj08@gmail.com
                </a>.
                
                `
            },
            
        ]
    },
    {
        title:'Terms of Service',
        paragraphs:[
            {
                text:`By downloading, installing, or using the CoReader mobile application ("the App"), you agree to be bound by the following Terms of Service. If you do not agree to these terms, please refrain from using the App.
                <br>
                App Usage: The App is provided for personal, non-commercial use. You may use the App solely for its intended purpose as described in the accompanying documentation.
                <br>
                Intellectual Property: All intellectual property rights related to the App, including copyrights and trademarks, are owned by the App developer. You may not modify, distribute, reproduce, or create derivative works based on the App or its content without prior written permission.
                <br>
                User Responsibilities: You are solely responsible for your use of the App. You agree not to use the App for any illegal, harmful, or unauthorized activities. You also agree not to interfere with the operation of the App or violate the rights of other users.
                <br>
                Limitation of Liability: The App developer shall not be liable for any damages, losses, or liabilities arising from the use of the App. The App is provided on an "as-is" basis, and the developer does not warrant its accuracy, availability, or fitness for a particular purpose.
                <br>
                Termination: The App developer reserves the right to terminate or suspend your access to the App at any time without notice or liability if you violate these Terms of Service or engage in any conduct that may harm the App or its users.
                <br>
                Governing Law: These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in India.
                <br>
                Modifications: The App developer reserves the right to modify or update these Terms of Service at any time. You are responsible for regularly reviewing the terms. Continued use of the App after any modifications constitutes your acceptance of the updated terms.`
            }
        ]
    }
]