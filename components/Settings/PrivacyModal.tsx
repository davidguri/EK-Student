import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../constants/colors";

export default function PrivacyModal(props): any {
  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInRight"}
      animationOut={"slideOutRight"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onSwipeComplete={props.onCancel}
      swipeDirection="right"
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>&lt; </Text>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "#000", width: "100%" }}>
            <ScrollView style={styles.body}>
              <View style={styles.headContainer}>
                <Text style={styles.title}>Privacy</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.headText}>Terms and Conditions</Text>
                <Text style={styles.bodyText}>Last updated: March 05, 2023</Text>
                <Text style={styles.bodyText}>Please read these terms and conditions carefully before using Our Service.</Text>
                <Text style={styles.headText}>Interpretation and Definitions</Text>
                <Text style={styles.subHeadingText}>Interpretation</Text>
                <Text style={styles.bodyText}>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Text>
                <Text style={styles.subHeadingText}>Definitions</Text>
                <Text style={styles.bodyText}>For the purposes of these Terms and Conditions:</Text>
                <Text style={styles.bodyText}>Application means the software program provided by the Company downloaded by You on any electronic device, named EK-Student</Text>
                <Text style={styles.bodyText}>Application Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</Text>
                <Text style={styles.bodyText}>Affiliate means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Text>
                <Text style={styles.bodyText}>Country refers to:  Albania</Text>
                <Text style={styles.bodyText}>Company (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to EK-Student.</Text>
                <Text style={styles.bodyText}>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</Text>
                <Text style={styles.bodyText}>Service refers to the Application.</Text>
                <Text style={styles.bodyText}>Terms and Conditions (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</Text>
                <Text style={styles.bodyText}>Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</Text>
                <Text style={styles.bodyText}>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
                <Text style={styles.headText}>Acknowledgment</Text>
                <Text style={styles.bodyText}>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</Text>
                <Text style={styles.bodyText}>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</Text>
                <Text style={styles.bodyText}>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</Text>
                <Text style={styles.bodyText}>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</Text>
                <Text style={styles.bodyText}>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</Text>
                <Text style={styles.headText}>Termination</Text>
                <Text style={styles.bodyText}>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</Text>
                <Text style={styles.bodyText}>Upon termination, Your right to use the Service will cease immediately.</Text>
                <Text style={styles.headText}>Limitation of Liability</Text>
                <Text style={styles.bodyText}>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</Text>
                <Text style={styles.bodyText}>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</Text>
                <Text style={styles.bodyText}>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</Text>
                <Text style={styles.headText}>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</Text>
                <Text style={styles.bodyText}>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</Text>
                <Text style={styles.bodyText}>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</Text>
                <Text style={styles.bodyText}>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</Text>
                <Text style={styles.headText}>Governing Law</Text>
                <Text style={styles.bodyText}>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</Text>
                <Text style={styles.headText}>Disputes Resolution</Text>
                <Text style={styles.bodyText}>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</Text>
                <Text style={styles.headText}>For European Union (EU) Users</Text>
                <Text style={styles.bodyText}>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</Text>
                <Text style={styles.headText}>United States Legal Compliance</Text>
                <Text style={styles.bodyText}>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</Text>
                <Text style={styles.headText}>Severability and Waiver</Text>
                <Text style={styles.subHeadingText}>Severability</Text>
                <Text style={styles.bodyText}>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</Text>
                <Text style={styles.subHeadingText}>Waiver</Text>
                <Text style={styles.bodyText}>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</Text>
                <Text style={styles.headText}>Translation Interpretation</Text>
                <Text style={styles.bodyText}>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</Text>
                <Text style={styles.headText}>Changes to These Terms and Conditions</Text>
                <Text style={styles.bodyText}>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</Text>
                <Text style={styles.bodyText}>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</Text>
                <Text style={styles.headText}>Contact Us</Text>
                <Text style={styles.bodyText}>If you have any questions about these Terms and Conditions, You can contact us:</Text>
                <Text style={styles.bodyText}>By email: dguri@ernestkoliqi.com</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 8.5,
  },

  header: {
    width: "100%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonText: {
    color: Colors.blue,
    fontSize: 21,
    fontWeight: "500",
  },

  button: {
    paddingHorizontal: 12,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  body: {
    width: "100%",
  },

  headContainer: {
    marginHorizontal: 10,
  },

  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "900",
    paddingBottom: 7.5,
  },

  description: {
    color: "#777",
    fontSize: 24,
    fontWeight: "800",
  },

  content: {
    paddingTop: 30,
    width: "95%",
    marginHorizontal: "2.5%",
  },

  bodyText: {
    color: "white",
    fontSize: 15
  },

  headText: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 7.5,
  },

  subHeadingText: {
    color: "white",
    fontSize: 21,
    fontWeight: "600",
    paddingVertical: 7.5
  },
});
