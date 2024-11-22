/* 
* Name: TOS.jsx
* Type: page
* Arguments: none
* Description: The page used to display the Terms of Service
*/

// Imports ///////////////////////////////////////////////////
// React
import { Link } from "react-router-dom";
// MUI
import Button from '@mui/material/Button';
// Icons
import { HiHome } from "react-icons/hi";

const TOS = () => {
  return (
    <>
      <section className="pageCont">
        <section className="tosSection">
          <h2>TERMS OF SERVICE</h2>
          <p>
            These Terms of Service (the “Terms”) govern your access to and use of
            the VoCheck website owned and operated by electionsTECH LLC. By accessing or
            using VoCheck and/or by indicating your assent to these Terms when you
            use VoCheck, you are agreeing to these Terms and entering into a
            legally binding contract with electionsTECH LLC, INCLUDING WAIVER OF ANY RIGHT
            TO PURSUE CLAIMS AS A REPRESENTATIVE OR MEMBER IN ANY CLASS OR
            REPRESENTATIVE ACTION. If you are unwilling or unable to be bound by
            the Terms, do not access or use VoCheck. electionsTECH LLC reserves the right,
            in its sole discretion, to change, modify, add, or delete portions of
            these Terms at any time without notice. Your continued use of VoCheck
            is subject to all such revisions. For information on how electionsTECH LLC
            collects, uses, and shares your personal information, please see the{" "}
            <b>Vocheck Privacy Policy</b>.
          </p>
          <h3>SITE RESTRICTIONS</h3>
          <p>
            VoCheck and the services offered through VoCheck are only for
            election-related, non-commercial use. To access or use VoCheck, you
            must be 13 years old or older and have the requisite power and
            authority to enter into these Terms. If you know of someone using
            VoCheck who is under age 13, please contact electionsTECH LLC at info@electionstech.com.
            VoCheck is also intended only for viewing in the United States by
            United States citizens. Do not access VoCheck if you are not located
            in the United States or if you are not a United States citizen.
            electionsTECH LLC may terminate, without notice, your access to VoCheck for
            failure to comply with this section.
          </p>
          <h3>OWNERSHIP</h3>
          <p>
            As between you and electionsTECH LLC, electionsTECH LLC owns all right, title, and
            interest in VoCheck, including the look and feel of VoCheck, and the
            content thereon. Your use of VoCheck does not grant you any ownership
            interest in VoCheck or any element thereof.
          </p>
          <h3>PROHIBITED CONDUCT</h3>
          <p>
            You may not use information on VoCheck for any purpose unrelated to
            elections. You may not use information on VoCheck for commercial
            purposes. “Commercial purposes” includes use in connection with
            advertising or promoting commercial products or services, or for the
            purpose of sale, resale, solicitation, or for any purpose in which the
            user can reasonably anticipate the receipt of monetary gain from
            direct or indirect use. For example, you may not sell information
            obtained from VoCheck, or use it in connection with advertising or
            promoting commercial products or services, or solicitation. You may
            not knowingly disclose information on VoCheck to any foreign
            government, or to a federal agency or commission, or to a person
            acting on behalf of a foreign government or of such a federal entity,
            for the purpose of (a) registration of a voter based on his or her
            information maintained in the checklist, (b) publicly disclosing a
            voter information maintained in the checklist, or (c) comparing a
            voter information maintained in the checklist to personally
            identifying information contained in other federal or state databases.
            You may not use VoCheck to take any action that could harm electionsTECH LLC or
            any third party, interfere with the operation of VoCheck, or use
            VoCheck to violate any law. By way of example but not limitation, you
            may not: (a) act in a manner that negatively affects other users&apos
            ability to engage in real time exchanges; (b) alter, edit, or delete
            the materials on VoCheck, including the deletion of any trademark or
            copyright notices on VoCheck; (c) interfere with or disrupt VoCheck,
            VOCHECK servers, or networks (e.g., “flooding” or the sending of
            mass unsolicited messages) or otherwise harm VoCheck or other users;
            (d) intentionally or unintentionally violate any applicable local,
            state, national, or international law or any regulations having the
            force of law; (e) impersonate any person or entity or misrepresent
            your connection to any person or entity; (f) “stalk,” harass, or
            otherwise advocate the stalking or harassing of another person; (g)
            collect or store personally identifiable information about other users
            in connection with the prohibited conduct and activities set forth
            herein; (h) reproduce, duplicate, copy, sell, trade, resell, or
            exploit for any commercial purposes, any portion of VoCheck; (i)
            attempt to override or circumvent any security measures of VoCheck or
            VOCHECK third party providers or access parts of VoCheck you are not
            authorized to visit; (j) engage in any unauthorized screen scraping,
            database scraping, or spidering, or collection of personally
            identifiable information, or use any other automated means to collect
            information from VoCheck; (k) use any software, tool, or other device
            (such as browsers, spiders, or avatars) to search VoCheck, other than
            the search functionality offered through VoCheck or other generally
            available web browsers; (l) link directly to any image hosted on
            VoCheck in a manner that would cause the image on VoCheck to be hosted
            on another web site; (m) link to VoCheck in such a manner that VoCheck
            or any portion thereof is “framed” on another web site; (n) attempt to
            reverse-engineer or decrypt any software on VoCheck; or (o) facilitate
            or encourage the violation of any of the policies set forth in these
            Terms.
          </p>
          <h3>MOBILE SERVICE</h3>
          <p>
            If VoCheck is accessible via a mobile device, electionsTECH LLC does not charge
            a fee for this, but your mobile service carrier fees may still apply.
            Further, downloading, installing, or using certain portions of VoCheck
            may be prohibited or restricted by your mobile service carrier, and
            not all features may function properly with all carriers, devices, or
            software. electionsTECH LLC recommends you check with your mobile service
            carrier to find out what restrictions, if any, may be applicable to
            your mobile service.
          </p>
          <h3>LINKS</h3>
          <p>
            VoCheck may contain links to other websites. electionsTECH LLC does not monitor
            or check the accuracy of such third-party materials and accordingly,
            electionsTECH LLC has no control over such third-party sites and resources.
            electionsTECH LLC is: (a) not responsible for the availability of such external
            sites or resources; and (b) does not endorse and is not responsible or
            liable for any advertising, products, or other materials on or
            available from such third parties. If you decide to access a
            third-party link, you do so at your own risk. You should review any
            terms and conditions and privacy polices prior to navigating to such
            third-party site from VoCheck.
          </p>
          <h3>CONTRIBUTIONS TO VOCHECK</h3>
          <p>
            electionsTECH LLC does not solicit unsolicited feedback, ideas, documents,
            suggestions, or other information (“Contributions”) about its
            services. If you provide a Contribution, electionsTECH LLC will be free to use
            any Contributions provided by you for any purpose, such as improving
            its services and creating derivative technologies based upon such
            Contributions. All Contributions are provided voluntarily and free of
            any third-party rights or encumbrances.
          </p>
          <h3>MODIFICATIONS TO SITE</h3>
          <p>
            electionsTECH LLC reserves the right at any time and from time to time to modify
            or discontinue, temporarily or permanently, VoCheck (or any part
            thereof) with or without notice. electionsTECH LLC will not be liable to you or
            to any third party for any modification, suspension, or discontinuance
            of VoCheck.
          </p>
          <h3>TERMINATION</h3>
          <p>
            electionsTECH LLC may terminate or suspend, without notice and in its sole
            discretion, your access to VoCheck.
          </p>
          <h3>REPRESENTATIONS AND WARRANTIES AND INDEMNITY</h3>
          <p>
            You represent and warrant that you have full authority to enter into
            and accept these Terms and grant the rights and licenses herein. You
            shall defend, indemnify, and hold harmless electionsTECH LLC, its parents,
            subsidiaries, and affiliates, and all of their directors, officers,
            agents, shareholders, and employees against all third party claims,
            damages, costs, and expenses (including reasonable attorneys&apos fees and
            litigation expenses) arising out of or in connection with: (a) your
            breach or alleged breach of the representations and warranties set
            forth herein; (b) your use of VoCheck; and/or (c) your violation of
            these Terms or any law or regulation. electionsTECH LLC reserves the right, at
            its own expense, to take over the defense of any claim subject to
            indemnification by you, and, if so, you shall cooperate with electionsTECH LLC
            defense as reasonably requested in defense of the claim.
          </p>
          <h3>DISCLAIMER OF WARRANTIES</h3>
          <p>
            VoCheck is a free public research tool that allows you to access
            information obtained in accordance with the National Voting Rights Act
            of 1993, 52 U.S.C. § 20501, et. seq., and specifically 52 U.S.C. §
            20507(i) and state public records laws. electionsTECH LLC is not the creator or
            originator of the voter information published on VoCheck. All voter
            information on VoCheck is public information provided to electionsTECH LLC by
            state and local election officials. electionsTECH LLC does not represent that
            the voter information provided by state and local election officials
            and displayed on VoCheck is accurate or reliable. Because the voter
            information on VoCheck comes from public records, if you discover any
            problem with the accuracy of information on VoCheck, or if you believe
            for any reason that the voter information should not be contained in
            publicly available records, you should contact the applicable state or
            local election official. YOUR USE OF VoCheck IS SOLELY AT YOUR OWN
            RISK. electionsTECH LLC MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE OF THE
            SUITABILITY OF VoCheck OR THAT VoCheck WILL BE SECURE, UNINTERRUPTED,
            ERROR-FREE, OR WILL FUNCTION PROPERLY IN COMBINATION WITH ANY
            THIRD-PARTY TECHNOLOGY, HARDWARE, SOFTWARE, SYSTEMS, OR DATA. VoCheck
            IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND ALL
            CONDITIONS, REPRESENTATIONS, AND WARRANTIES, WHETHER EXPRESS, IMPLIED,
            STATUTORY, OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED
            WARRANTY OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            OR NON-INFRINGEMENT ARE HEREBY DISCLAIMED TO THE MAXIMUM EXTENT
            PERMITTED BY APPLICABLE LAW. VoCheck MAY BE SUBJECT TO INTERRUPTION,
            LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF
            WIRELESS APPLICATIONS AND ELECTRONIC COMMUNICATIONS, AND electionsTECH LLC IS
            NOT RESPONSIBLE FOR ANY SUCH DELAYS, DELIVERY FAILURES, OR ANY OTHER
            DAMAGE RESULTING FROM EVENTS BEYOND electionsTECH LLC REASONABLE CONTROL.
            FURTHER, electionsTECH LLC MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE IN
            REGARD TO ANY INFORMATION DOWNLOADED, OR OTHERWISE OBTAINED BY YOU
            THROUGH VoCheck FROM A THIRD PARTY. THIS INCLUDES ANY APPLICATION,
            CONTENT, OR LINK PROVIDED BY A THIRD PARTY. YOU ARE SOLELY RESPONSIBLE
            FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM (INCLUDING WITHOUT LIMITATION,
            WIRELESS DEVICES) OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF
            ANY SUCH MATERIAL.
          </p>
          <h3>LIMITATION OF LIABILITY</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
            electionsTECH LLC BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, DIRECT, INDIRECT,
            SPECIAL, PUNITIVE, OR OTHER DAMAGES WHATSOEVER (INCLUDING, WITHOUT
            LIMITATION, DAMAGES FOR LOSS OF PROFITS, BUSINESS INTERRUPTION,
            GOODWILL, DATA, BREACH OF USER SECURITY, TERMINATION OF USER ACCESS,
            OR OTHER PECUNIARY LOSS) ARISING OUT OF THESE TERMS OR THE USE OF OR
            INABILITY TO USE VoCheck, EVEN IF electionsTECH LLC HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES. YOUR EXCLUSIVE REMEDY AND electionsTECH LLC TOTAL
            AGGREGATE LIABILITY RELATING TO, ARISING OUT OF, IN CONNECTION WITH,
            OR INCIDENTAL TO THESE TERMS FOR ANY REASON WILL BE LIMITED TO THE
            ACTUAL DIRECT DAMAGES INCURRED BY YOU, UP TO ONE HUNDRED U.S. DOLLARS
            ($100.00). THIS LIMITATION APPLIES TO ALL CAUSES OF ACTION OR CLAIMS
            IN THE AGGREGATE FOR ANY REASON INCLUDING, WITHOUT LIMITATION,
            PERSONAL HARM. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF
            CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
            INCIDENTAL OR CONSEQUENTIAL DAMAGES; ACCORDINGLY, SOME OF THE ABOVE
            LIMITATIONS OF SECTIONS MAY NOT APPLY TO YOU.
          </p>
          <h3>CHOICE OF LAW AND VENUE</h3>
          <p>
            Texas law will govern these Terms, as well as any claim, cause of
            action, or dispute that might arise between you and electionsTECH LLC, without
            regard to conflict of law provisions. For any claim brought by either
            party, you agree to submit and consent to the personal and exclusive
            jurisdiction in, and the exclusive venue of, the state and federal
            courts located within Rockwall County, Texas.
          </p>
          <h3>CLASS ACTION WAIVER</h3>
          <p>
            YOU AND electionsTECH LLC WAIVE ANY RIGHT TO ASSERT ANY CLAIMS AGAINST EACH
            OTHER AS A REPRESENTATIVE OR MEMBER IN ANY CLASS OR REPRESENTATIVE
            ACTION. You agree that you will pursue any claim or lawsuit against
            electionsTECH LLC as an individual and will not bring, maintain, or participate
            in any class action, collective action, or representative action
            against electionsTECH LLC, and that, if you are included within a class,
            collective, or representative action, you will take all steps
            necessary either to opt out of the action or refrain from opting in.
          </p>
          <h3>TRADEMARK INFORMATION</h3>
          <p>
            VoCheck and any trademarks associated with VoCheck are the property of
            electionsTECH LLC. All trademarks on VoCheck that are not owned by electionsTECH LLC are
            the property of their respective owners. In no event will any electionsTECH LLC
            trademarks or other trademarks be deemed licensed, sold, or assigned
            to you as a result of your acceptance of these Terms or by your use of
            VoCheck. All rights not expressly granted herein are reserved.
          </p>
          <h3>COPYRIGHT</h3>
          <p>
            VoCheck and the information on VoCheck (including text, photos,
            graphics, software, video, and audio) are protected by copyright law
            as collective works or compilations. The actual voter records
            themselves as well as statutes and regulations are in the public
            domain. All individual text, photos, graphics, software, video, audio,
            and other elements of the Site are also protected by copyright. You
            are prohibited from publishing, displaying, reproducing, distributing,
            entering into a database, performing, modifying, creating derivative
            works, transmitting, or in any way exploiting any part of VoCheck,
            except that you may access and view the content on VoCheck on your
            computer or other digital device and make single copies or prints of
            the content on VoCheck for any purpose not inconsistent with the
            conduct prohibited in the “Prohibited Conduct” section above. Copying
            or storing any content for any other purpose is prohibited.
          </p>
          <h3>GENERAL</h3>
          <p>
            These Terms and the Privacy Policy comprise the entire agreement
            between you and electionsTECH LLC and supersede all prior or contemporaneous
            negotiations, discussions, or agreements, whether written or oral,
            between the parties regarding the subject matter contained herein. All
            notices, requests, or other communications must be in writing and sent
            via email or US pre-paid post to the authorized representative of the
            other party. If any part of these Terms is found to be illegal,
            unenforceable, or invalid, then that part will be removed, and
            remaining provisions will continue to be valid and enforceable. No
            joint venture, partnership, employment, agency, or exclusive
            relationship will exist between you and VOCHECK. Any failure to
            enforce any provision of these Terms will not constitute a waiver of
            such rights. All indemnities, licenses, disclaimers, limitations, and
            restrictions of warranty will survive termination of these Terms, as
            well as the provisions of this “General” section.
          </p>
          <h3>CONTACTING electionsTECH LLC</h3>
          <p>
            You may email us at:  info@electionstech.com
          </p>
        </section>
        <section>
          <div className="centeredButtonCont">
            <Link to="/">
              <Button
                className="homeButton"
                startIcon={<HiHome />}
                variant="contained"
                type="submit"
              >
                Home
              </Button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default TOS;