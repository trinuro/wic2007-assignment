import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const socialMediaTheory = (
  <div>
    {/* Section 1 */}
    <section className="course-section">
      <h2>1. Unknown Friend Request with a Personal Compliment</h2>
      <h3>1.1 The Nature of Stranger Requests on Social Media</h3>
      <ul>
        <li><b>Incomplete Profile as a Red Flag</b>
          <ul>
            <li>Profiles with few posts, no mutual connections, and sparse "About" sections are often created just to target new victims.</li>
            <li>An unfamiliar account may be a "bot" or a malicious actor's "shell" profile.</li>
          </ul>
        </li>
        
        <li><b>Compliments Can Be Manipulative</b>
          <ul>
            <li>Excessive flattery—especially from someone you've never met—can be a way to lower your guard.</li>
            <li>Predators and scammers often use praise ("Your photos are amazing!") to initiate trust quickly.</li>
          </ul>
        </li>
      </ul>

      <p></p>
      <h3>1.2 Key Takeaways</h3>
      <ul>
        <li><b>Only Accept Requests from Known or Verifiable Contacts</b>
          <ul>
            <li>Before accepting, check whether you have any mutual friends who can vouch for them.</li>
            <li>If no mutual connections, it's safer to ignore or decline.</li>
          </ul>
        </li>
        
        <li><b>"Trust but Verify" Isn't Enough with Strangers</b>
          <ul>
            <li>Even if you want to give someone "a chance," the risk of data-snooping or grooming far outweighs the benefit.</li>
          </ul>
        </li>
        
        <li><b>Default Response: Ignore/Decline</b>
          <ul>
            <li>By declining, you preserve your privacy and minimize risk.</li>
            <li>If they follow up persistently, block (and consider reporting for spam/harassment).</li>
          </ul>
        </li>
      </ul>
    </section>
    <p></p>
    {/* Section 2 */}
    <section className="course-section">
      <h2>2. Real-Time Location Sharing</h2>
      <h3>2.1 What Is Real-Time Location Sharing?</h3>
      <ul>
        <li><b>How It Works</b>
          <ul>
            <li>Some social platforms (e.g., Facebook Messenger, WhatsApp, Snapchat) allow live‐location broadcasting—GPS coordinates update continuously.</li>
            <li>Followers or "friends" who have permission see your exact movements in real time.</li>
          </ul>
        </li>
        
        <li><b>Why Platforms Advertise "Safety Reasons"</b>
          <ul>
            <li>While it can help in emergencies (e.g., family tracking you when traveling), it also exposes continuous, granular location data to anyone with access—even if they initially seem "friendly."</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>2.2 Risks of Broadcasting Your Exact Location</h3>
      <ul>
        <li><b>Physical Safety Threat</b>
          <ul>
            <li>An unknown follower (or someone who gained access) could track your routine (school, home, after‐school hangouts).</li>
            <li>If your privacy settings are not extremely restrictive, "followers" could include people you don't truly trust.</li>
          </ul>
        </li>
        
        <li><b>Stalking & Profiling</b>
          <ul>
            <li>Continuous updates create a pattern of your movements (e.g., "They leave their house at 7:30 AM every weekday").</li>
            <li>Once someone knows your routine, they can predict when you're alone or vulnerable.</li>
          </ul>
        </li>
   
        <li><b>Privacy Erosion</b>
          <ul>
            <li>Location data might get harvested by third‐party apps or sold to advertisers.</li>
            <li>Even "trusted" friends might unintentionally share screenshots or forward your location to others.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>2.3 Best Practice</h3>
      <ul>
        <li><b>Never Enable Real-Time Location Sharing with Broad Groups</b>
          <ul>
            <li>If you must share location, restrict it to one or two trusted people (e.g., a parent).</li>
            <li>Immediately disable it once the "safety" need passes (e.g., you arrive at your destination).</li>
          </ul>
        </li>
        <li><b>Default Stance</b>
          <ul>
            <li>"C. Never enable real-time location sharing with any followers."</li>
          </ul>
        </li>
      </ul>
    </section>
    <p></p>
    {/* Section 3 */}
    <section className="course-section">
      <h2>3. Suspicious "Free Concert Tickets" Ad</h2>
      <h3>3.1 How Phishing & Fake Promotions Operate on Social Media</h3>
      <ul>
        <li><b>Sponsored Posts & Boosted Ads</b>
          <ul>
            <li>Scammers can purchase ad space cheaply. They design ads to mimic legitimate event promoters.</li>
            <li>Clicking the link may redirect you to a form that harvests all your personal details (name, email, phone, sometimes payment info).</li>
          </ul>
        </li>
        <li><b>Red Flags in "Too Good to Be True" Offers</b>
          <ul>
            <li>Unverified Page or Profile: The ad's "From" field might show a page name that looks official, but the URL behind the "Learn More" button is often a random domain.</li>
            <li>Generic Urgency Tactics: "Offer ends today!" or "Limited tickets—click now!"—these create FOMO (fear of missing out).</li>
            <li>Requests for Excessive Personal Data: Legitimate ticket promotions rarely ask for your full address, phone number, or ID number just to "validate" free tickets.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>3.2 Verification Steps Before Clicking</h3>
      <ul>
        <li><b>Check the Promoter's Official Channels</b>
          <ul>
            <li>Visit the artist's or venue's official website/verified social‐media page. See if the same giveaway is running there.</li>
          </ul>
        </li>
        <li><b>Inspect the Link</b>
          <ul>
            <li>Hover (desktop) or long-press (mobile) to preview the URL. If it doesn't clearly match the promoter's domain, do not click.</li>
          </ul>
        </li>
        <li><b>Look for Community Feedback</b>
          <ul>
            <li>Scroll through comments under the ad. If multiple users warn "This is a scam," take it seriously.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>3.3 Best Practice</h3>
      <ul>
        <li><b>Always Research the Promoter's Official Site First</b>
          <ul>
            <li>Answer: B. If uncertain, go directly to the source (e.g., band's official Instagram, venue's website) rather than trusting a random ad.</li>
          </ul>
        </li>
      </ul>
    </section>
    <p></p>
    {/* Section 4 */}
    <section className="course-section">
      <h2>4. Grooming Indicator: Asking to Move to Private Chat</h2>
      <h3>4.1 Understanding Online Grooming in Social Media Contexts</h3>
      <ul>
        <li><b>Definition of Grooming</b>
          <ul>
            <li>A gradual process where an adult tries to build trust with a minor, often via social‐media DMs, to manipulate or exploit them.</li>
          </ul>
        </li>
        <li><b>Why Groomers Push for Private Platforms</b>
          <ul>
            <li>Once the conversation moves off the main social platform (e.g., from Instagram DMs to WhatsApp, Telegram, Discord), there's no easy moderation or oversight. Screenshots, reporting mechanisms, and content filters disappear.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>4.2 Grooming Red Flags</h3>
      <ul>
        <li><b>"Let's Chat on [Other App]"</b>
          <ul>
            <li>Immediate insistence on switching to a private messenger—even after one or two friendly messages.</li>
          </ul>
        </li>
        <li><b>Overly Personal Questions</b>
          <ul>
            <li>Asking where you go to school, your home address, or your daily schedule early in the conversation.</li>
          </ul>
        </li>
        <li><b>Excessive Flattery & Gift Offers</b>
          <ul>
            <li>Sending unsolicited virtual gifts, store gift cards, or repeatedly praising your photos to gain trust quickly.</li>
          </ul>
        </li>
        <li><b>Requests to Keep Secrets</b>
          <ul>
            <li>"Don't tell your friends/parents about me." This aims to isolate you from support networks.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>4.3 Best Practice</h3>
      <ul>
        <li><b>Recognize That Moving to Private Chat Is a Grooming Tactic</b>
          <ul>
            <li>Answer: B. Always keep initial conversations on the social‐media app where they can be monitored.</li>
            <li>If someone tries to push you elsewhere, immediately block and report.</li>
          </ul>
        </li>
      </ul>
    </section>
    <p></p>
    {/* Section 5 */}
    <section className="course-section">
      <h2>5. Verifying an Online Stranger's Identity</h2>
      <h3>5.1 Why "Profile Alone" Is Not Enough</h3>
      <ul>
        <li><b>Fake Accounts & Impersonation</b>
          <ul>
            <li>A sophisticated scammer can copy photos, bios, and even follower lists from a real account to create a convincing imposter profile.</li>
            <li>Blue checkmarks (verified badges) help but are not foolproof (some platforms have fewer verification checks).</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>5.2 Verification Techniques</h3>
      <ul>
        <li><b>Mutual Connections & Background Checks</b>
          <ul>
            <li>Check whether you share any genuine friends. Reach out to those mutuals outside the request thread (via phone, another app) and ask, "Do you actually know this person?"</li>
          </ul>
        </li>
        <li><b>Video/Voice Call in Small Groups</b>
          <ul>
            <li>Propose a brief group video call (for example, in a 3–4-people Zoom or FaceTime) that includes at least one friend you trust.</li>
            <li>Seeing a "live face" and hearing their voice can confirm they aren't lip-syncing or using a deepfake.</li>
          </ul>
        </li>
        <li><b>Cross-Platform Consistency</b>
          <ul>
            <li>Search for the same username on Instagram, TikTok, Twitter, YouTube. A consistent posting style, similar followers/following, and real‐time interactions lend credibility.</li>
          </ul>
        </li>
        <li><b>Reverse-Image Search</b>
          <ul>
            <li>Download their profile photo and run a reverse-image search (e.g., Google Images). If the same picture shows up on news sites or stock‐photo repositories, it's likely stolen.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>5.3 Best Practice</h3>
      <ul>
        <li><b>Check Mutual Connections and Reputable Sources</b>
          <ul>
            <li>Answer: C. Do not rely solely on their social-media profile. Instead, verify via friends you know or reputable third-party references (e.g., official website, LinkedIn, public-facing blog).</li>
          </ul>
        </li>
      </ul>
    </section>
    <p></p>
    {/* Section 6 */}
    <section className="course-section">
      <h2>6. Stranger Who Compliments Relentlessly & Wants to Be "Best Friends"</h2>
      <h3>6.1 Why Excessive Flattery Is Dangerous Online</h3>
      <ul>
        <li><b>Emotional Manipulation Through Compliments</b>
          <ul>
            <li>Compliments can create a false sense of intimacy. If someone praises your appearance or "kindness" without really knowing you, it's often a tactic to make you feel special, thereby lowering your defenses.</li>
          </ul>
        </li>
        <li><b>Isolation Tactics</b>
          <ul>
            <li>A predator may say, "Nobody else understands me like you do," implying you should distance yourself from real friends and family.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>6.2 Defense Strategies</h3>
      <ul>
        <li><b>Maintain Boundaries</b>
          <ul>
            <li>Recognize that a stranger who's overly complimentary—from day one—is likely trying to manipulate.</li>
            <li>Respond with generic "Thank you" if you want to remain polite, but do not reciprocate personal info or deepen the conversation.</li>
          </ul>
        </li>
        <li><b>Decline Further Interaction & Block</b>
          <ul>
            <li>If their messages continue and make you uncomfortable, immediately block them. This cuts off any further attempts at manipulation.</li>
          </ul>
        </li>
        <li><b>Report If They Become Harassing or Threatening</b>
          <ul>
            <li>If compliments turn into demands or get sexualized, or if they send unsolicited images, use the platform's "Report" feature.</li>
          </ul>
        </li>
        <li><b>Discuss with Trusted People</b>
          <ul>
            <li>Show screenshot(s) to a parent, counselor, or a close friend. Getting a second perspective can confirm whether you're being groomed or manipulated.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>6.3 Best Practice</h3>
      <ul>
        <li><b>Politely Decline & Block</b>
          <ul>
            <li>Answer: B. Never accept a "best friend" label from a stranger who hasn't been verified. Keep your circle small and confirm each new connection before deepening trust.</li>
          </ul>
        </li>
      </ul>
    </section>
    <p></p>
    {/* Section 7 */}
    <section className="course-section">
      <h3>7. Bringing It All Together: Core Learning Objectives</h3>
      <ul>
        <li>Distinguish Between Genuine vs. Malicious Connection Attempts: Use profile‐audit techniques (mutual friends, posting history, reverse‐image search) to decide if a request is legitimate.</li>
        <li>Guard Location Data as Privileged Information: Understand that "real-time location sharing" can expose you to stalking; only enable it under tight restrictions.</li>
        <li>Identify Phishing & Scams Among Social-Media Ads: Recognize urgency tactics, mismatched URLs, and lack of official corroboration as major warning signs.</li>
        <li>Recognize Grooming Behaviors in DMs: Spot attempts to move the conversation off the platform, excessive flattery without context, or requests for secrecy.</li>
        <li>Verify Identity with Multiple, Independent Checks: Rely on mutual friends, video calls, and cross-platform consistency—never trust a single, isolated social-media profile.</li>
        <li>Set Firm Boundaries Against Manipulative Compliments: Treat relentless praise or "best friend" pitches from strangers as a manipulation red flag. Block and report if needed.</li>
      </ul>
    </section>
  </div>
);

const socialMediaTheory2_0 = (
  <div>
    <section className="course-section">
      <h2>1.Understanding the Risks Behind the Platforms You Love</h2>

      <h3>1.1 Facebook – Profile Stalking and Hidden Data Exposure</h3>
      <b>What Teens Do: </b>Share life updates, school info, and join groups.
      <p> </p>
      <b>Risks:</b>
      <ul>
        <li>Even private posts may leak through mutual connections.</li>
        <li>School, birthdate, and town info help guess passwords/security questions.</li>
        <li>Algorithmic friend suggestions reveal your profile to unsafe individuals.</li>
      </ul>
      <b>Safe Practices:</b>
      <ul>
        <li>Limit profile visibility (hide school, birthday, etc.).</li>
        <li>Remove old posts via Activity Log.</li>
        <li>Leave sketchy public groups.</li>
        <li>Use "View As" to simulate a stranger's view of your profile.</li>
      </ul>
      <p></p>
      <h3>1.2 Instagram – Fake Influencers and Bot Comments</h3>
      <b>What Teens Do:</b> Follow trends, post reels, interact with influencers.
      <p></p>
      <b>Risks:</b>
      <ul>
        <li>Scams via fake influencer collabs and comment bots.</li>
        <li>Story Q&As can be mined for personal info.</li>
        <li>"Close Friends" list can be exploited to build trust.</li>
      </ul>
      <b>Safe Practices:</b>
      <ul>
        <li>Don't trust collab DMs unless verified.</li>
        <li>Use "Restrict" feature for suspicious followers.</li>
        <li>Audit "Close Friends" list monthly.</li>
        <li>Avoid clicking external links in comment sections.</li>
      </ul>
      <p></p>
      <h3>1.3 TikTok – Misinformation and Dangerous Challenges</h3>
      <b>What Teens Do:</b> Scroll FYP, post challenges, watch duets/stitches.
      <p></p>
      <b>Risks:</b>
      <ul>
        <li>Exposure to health misinformation and illegal trends.</li>
        <li>Filters skew body image.</li>
        <li>Duet/stitch can be misused for mockery.</li>
      </ul>
      <b>Safe Practices:</b>
      <ul>
        <li>Disable duet/stitch for sensitive content.</li>
        <li>Use Digital Wellbeing to limit screen time and content.</li>
        <li>Research before participating in trends.</li>
        <li>Think before posting—the internet is forever.</li>
      </ul>
      <p></p>
      <h3>1.4 Unknown Apps – Privacy Risks and Fake Anonymity</h3>
      <b>What Teens Do:</b> Explore lesser-known apps to escape parental oversight.
      <p></p>
      <b>Risks:</b>
      <ul>
        <li>Weak moderation invites harassment.</li>
        <li>Anonymous Q&A features used for bullying.</li>
        <li>Data often retained even after deletion.</li>
      </ul>
      <b>Safe Practices:</b>
      <ul>
        <li>Avoid apps not listed in official stores.</li>
        <li>Say no to anonymous message features.</li>
        <li>Check app permissions.</li>
        <li>Read privacy policies—know where your data goes.</li>
      </ul>
      <p></p>
      <h2>2. Trends That Seem Safe But Aren't</h2>
      <ul>
        <li>Story Polls/Q&As: Used to manipulate or profile users.</li>
        <li>Graduation/Birthday Posts: Reveal schedule/location.</li>
        <li>Add Yours Stickers: Encourage oversharing.</li>
        <li>Follow-for-Follow Chains: Increase exposure to bots and scammers.</li>
      </ul>
      <p></p>
      <h2>3. Universal Smart Safety Habits</h2>
      <ul>
        <li>Perform a privacy check monthly.</li>
        <li>Avoid posting chat screenshots.</li>
        <li>Clean up DMs regularly.</li>
        <li>Use strong, unique passwords with a password manager.</li>
        <li>Pause and reflect: "Could this be used against me?"</li>
      </ul>
      <p></p>
      <h2>4. Situational Safety Scenarios</h2>
      <ul>
        <li><b>Unknown Friend Request with a Personal Compliment:</b> Check for incomplete profiles, excessive flattery, and lack of mutual connections. <i>Action:</i> Decline or block unsolicited requests.</li>
        <li><b>Real-Time Location Sharing:</b> Understand GPS-sharing risks and disable unless absolutely necessary. <i>Action:</i> Only share with close family/friends during emergencies.</li>
        <li><b>Suspicious 'Free Concert Tickets' Ad:</b> Watch for fake domains, urgency tactics, and over-collection of data. <i>Action:</i> Always verify through official artist or venue channels.</li>
        <li><b>Grooming Attempt – Moving to Private Chat:</b> Be alert to someone trying to isolate you by switching to a private app. <i>Action:</i> Block and report. Talk to a trusted adult.</li>
        <li><b>Fake Profiles – Verifying Identity:</b> Use reverse image search, mutual friend verification, and cross-platform checks. <i>Action:</i> Do not trust unknown accounts without multi-source validation.</li>
        <li><b>Manipulative Compliments from a Stranger:</b> Excessive flattery and attempts to be a "best friend" are red flags. <i>Action:</i> Respond politely if needed, but block and report if behavior continues.</li>
      </ul>
    </section>

    <p></p>

    <h3>Learning Objectives</h3>
      <ul>
        <li>Recognize platform-specific risks across popular social media apps.</li>
        <li>Apply privacy settings and safety features unique to each platform.</li>
        <li>Identify and avoid manipulative trends, scams, and data leaks.</li>
        <li>Make informed decisions about what to share and who to engage with.</li>
      </ul>
  </div>
);

const phishingTheory = (
  <div>
    {/* Section 1 */}
    <section className="course-section">
      <h2>1. Message Claiming Government Aid</h2>
      <h3>1.1 How Phishers Exploit Trust and Emotions</h3>
      <ul>
        <li><b> Appeal to Authority (Government)</b>
          <ul>
            <li>Scammers claim to be 'from the government' to gain instant credibility.</li>
            <li>Use of Malay terms like 'kerajaan' or sign-offs like 'Daulat Tuanku' mimic official language.</li>
            <li>Relies on trust in state announcements.</li>
          </ul>
        </li>
        <li><b>Financial Incentive as a Lure</b>
          <ul>
            <li>Offers of 'free aid' like RM 300 appeal to economic hardship.</li>
            <li>Triggers fear of missing out, leading users to click links impulsively.</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>1.2 Recognizing a Fake (Phishing) Link</h3>
      <ul>
        <li>Official Malaysian government URLs end in '.gov.my'.</li>
        <li>Phishing sites use odd domains and spelling (e.g., 'b4ntuan' on 'vercel.app').</li>
        <li>URLs may be long, gibberish, or shortened to mask malicious intent.</li>
        <li>Hover (desktop) or long-press (mobile) to preview true URLs before clicking.</li>
      </ul>
      <p></p>
      <h3>1.3 Play on Cultural/Emotional Cues</h3>
      <ul>
        <li>Scammers use greetings like 'Salam' and phrases like 'Daulat Tuanku' to sound respectful and official.</li>
        <li>These cues exploit cultural respect to lower skepticism.</li>
      </ul>
      <p></p>
      <h3>1.4 Best Practices for Messages Claiming Aid</h3>
      <ul>
        <li>Verify sender identity through official sources.</li>
        <li>Cross-check offers through government portals (e.g., gov.my).</li>
        <li>Do not click non-governmental URLs claiming aid.</li>
        <li>Report and block suspicious WhatsApp messages.</li>
      </ul>
    </section>
    <p></p>
    {/* Section 2 */}
    <section className="course-section">
      <h2>2. Common Signs of a Phishing Message</h2>
      <h3>2.1 Phishing Tactics Overview</h3>
      <ul>
        <li>Trick users into entering login info on fake pages.</li>
        <li>Use fear, urgency, or rewards to manipulate users.</li>
      </ul>
      <p></p>
      <h3>2.2 Why Suspicious Links Are the Main Red Flag</h3>
      <ul>
        <li>Official domains are clear and accurate (e.g., apple.com).</li>
        <li>Phishing domains use small changes (e.g., 'b4nkname').</li>
        <li>Personalized greetings can be spoofed.</li>
        <li>Tips or update notifications are only harmful if they include malicious links.</li>
      </ul>
      <p></p>
      <h3>2.3 Best Practices to Identify Phishing Signs</h3>
      <ul>
        <li>Preview links before clicking.</li>
        <li>Watch for unusual top-level domains (e.g., '.xyz').</li>
        <li>Check for generic sender addresses.</li>
        <li>Avoid urgent messages demanding quick actions.</li>
        <li>Never enter credentials on third-party forms.</li>
      </ul>
    </section>
    <p></p>
    {/* Section 3 */}
    <section className="course-section">
      <h2>3. Protecting Yourself from Phishing</h2>
      <h3>3.1 Why Password Hygiene Matters</h3>
      <ul>
        <li>Never reuse passwords—compromise in one place affects all accounts.</li>
        <li>Use a password manager to store complex passwords.</li>
      </ul>
      <p></p>
      <h3>3.2 Role of Two-Factor Authentication (2FA)</h3>
      <ul>
        <li>2FA adds an extra layer of security.</li>
        <li>Even if passwords are leaked, attackers can't access accounts without second proof.</li>
        <li>Turning off 2FA increases vulnerability.</li>
      </ul>
      <p></p>
      <h3>3.3  Why Clicking Suspicious Links on Mobile Is Not Safer</h3>
      <ul>
        <li>Mobile pages can mimic legitimate apps and sites.</li>
        <li>Security checks work similarly across desktop and mobile.</li>
      </ul>
      <p></p>
      <h3>3.4 Best Practices for Phishing Prevention</h3>
      <ul>
        <li>Inspect all links regardless of platform.</li>
        <li>Enable 2FA wherever possible.</li>
        <li>Verify login requests manually.</li>
        <li>Use antivirus and browser protections to flag phishing sites.</li>
      </ul>
    </section>
    <p></p>
    {/* Section 4 */}
    <section className="course-section">
      <h2>4. Fake Bank Email Asking to Verify Account</h2>
      <h3>4.1 How to Spot a Phony Bank Email</h3>
      <ul>
        <li>Sender domains must exactly match the official bank domain.</li>
        <li>Look out for letter swaps and added words in domain (e.g., 'b4nk-secure-help.com').</li>
        <li>Threats like 'Frozen Account' are designed to cause panic.</li>
      </ul>
      <p></p>
      <h3>4.2 Why Replying or Clicking Is Dangerous</h3>
      <ul>
        <li>Replying confirms your email is active—invites more phishing.</li>
        <li>Clicking leads to fake login pages that harvest your credentials.</li>
      </ul>
      <p></p>
      <h3>4.3 Best Response Strategy</h3>
      <ul>
        <li>Ignore or delete phishing emails.</li>
        <li>Use official banking channels to log in.</li>
        <li>Hover links to detect spoofed domains.</li>
        <li>Optionally forward phishing emails to the bank's fraud team.</li>
      </ul>
    </section>
    <p></p>
    {/* Section 5 */}
    <section className="course-section">
      <h2>5. Fake Google Suspension Email</h2>
      <h3>5.1 Anatomy of a Legitimate Google Security Email</h3>
      <ul>
        <li>Google alerts come from '@accounts.google.com'.</li>
        <li>Legit URLs use 'accounts.google.com' or 'myaccount.google.com'.</li>
        <li>Rarely use 'support.google.com.my' for verification.</li>
      </ul>
      <p></p>
      <h3>5.2 Why the URL Is the Red Flag</h3>
      <ul>
        <li>'support.google.com.my' is only for local help articles, not verification.</li>
        <li>Real account warnings use in-app or email with benign 'Review Activity' buttons.</li>
      </ul>
      <p></p>
      <h3>5.3 Best Practice When Receiving 'Account Suspended' Emails</h3>
      <ul>
        <li>Manually go to 'myaccount.google.com'.</li>
        <li>Check full headers for sender legitimacy.</li>
        <li>Treat non-'accounts.google.com' links as phishing.</li>
        <li>Rely on Gmail's phishing detection warnings.</li>
      </ul>
    </section>
    <p></p>
    {/* Section 6 */}
    <section className="course-section">
      <h2>6. Phone Scam Involving False Police Threats</h2>
      <h3>6.1 Understanding Voice/Phone Phishing ('Vishing')</h3>
      <ul>
        <li>Uses phone calls to steal info via impersonation and fear.</li>
        <li>Common tactics: pretending to be police, urgency, secrecy.</li>
      </ul>
      <p></p>
      <h3>6.2 Why 'Keep It Secret' Is a Classic Scam Tactic</h3>
      <ul>
        <li>Isolates victim to prevent verification with trusted adults.</li>
        <li>Maintains pressure and anxiety to extract money.</li>
      </ul>
      <p></p>
      <h3>6.3 Other Common Phone/Voice Scam Red Flags</h3>
      <ul>
        <li>Spoofed caller IDs (e.g., '+60 03 8888 9999').</li>
        <li>No official documentation provided.</li>
        <li>Requests for untraceable payment methods.</li>
        <li>No verifiable details like case number or paperwork.</li>
      </ul>
      <p></p>
      <h3>6.4 Best Practices to Avoid Vishing Scams</h3>
      <ul>
        <li>Hang up and call official hotline numbers.</li>
        <li>Tell a trusted adult immediately.</li>
        <li>Never transfer money without verifying.</li>
        <li>Use call-blocking and report scams to authorities.</li>
      </ul>
    </section>
    <p></p>
    {/* Section 7 */}
    <section className="course-section">
      <h2>7. Key Takeaways & Core Learning Objectives</h2>
      <ul>
        <li>Detect scams by spotting URL mismatches and emotional manipulation.</li>
        <li>Understand phishing red flags and avoid fake login prompts.</li>
        <li>Practice good security hygiene: unique passwords, 2FA, and link scrutiny.</li>
        <li>Verify banking messages via official sources only.</li>
        <li>Avoid phishing traps in 'account suspended' emails by inspecting URLs.</li>
        <li>Recognize isolation tactics used in voice scams and never act under secrecy.</li>
      </ul>
    </section>
  </div>
);

const phishingTheory2_0 = (
  <div>
    <section className="course-section">
  <h2>1. Job Offer or Internship Scam</h2>
  <h3>1.1 How Phishers Exploit Career Ambitions</h3>
  <ul>
    <li><b>Too-Good-To-Be-True Offers</b>
      <ul>
        <li>Scammers offer high-paying remote jobs or internships with vague descriptions.</li>
        <li>Target fresh graduates or students seeking opportunities.</li>
      </ul>
    </li>
    <li><b>Impersonation of Well-Known Companies</b>
      <ul>
        <li>Use logos of companies like Petronas, Shell, or Google.</li>
        <li>Create fake LinkedIn profiles and email addresses that look legitimate (e.g., hr.google.career@gmail.com).</li>
      </ul>
    </li>
  </ul>
  <p></p>
  <h3>1.2 Recognizing a Fake Job Offer</h3>
  <ul>
    <li><b>Lack of Proper Interview Process</b>
      <ul>
        <li>Immediate job confirmations without interviews are red flags.</li>
        <li>Real employers follow structured hiring processes.</li>
      </ul>
    </li>
    <li><b>Requests for Upfront Payment</b>
      <ul>
        <li>Victims are asked to pay for “job kits,” registration, or training.</li>
        <li>Legitimate employers never charge job seekers.</li>
      </ul>
    </li>
  </ul>
  <p></p>
  <h3>1.3 Play on Urgency and Opportunity</h3>
  <ul>
    <li><b>False Sense of Exclusivity</b>
      <ul>
        <li>"You’ve been specially selected" or “limited slots” language adds pressure.</li>
        <li>Designed to rush victims into sharing personal data or paying fees.</li>
      </ul>
    </li>
  </ul>
  <p></p>
  <h3>1.4 Best Practices When Receiving Job Offers Online</h3>
  <ul>
    <li>Research the company and job posting independently via their official site.</li>
    <li>Avoid responding to personal email domains (e.g., Gmail, Yahoo).</li>
    <li>Contact the HR department directly through official company channels.</li>
    <li>Report suspicious offers to campus career centers or authorities.</li>
  </ul>
</section>
<p></p>
<section className="course-section">
  <h2>2. Tech Support Scam</h2>
  <h3>2.1 How Scammers Impersonate IT Help</h3>
  <ul>
    <li><b>Fake Virus Alerts</b>
      <ul>
        <li>Pop-ups or calls claim “your device is infected.”</li>
        <li>Urge immediate action to call a “Microsoft technician.”</li>
      </ul>
    </li>
    <li><b>Remote Access Requests</b>
      <ul>
        <li>Scammers ask to install remote tools like AnyDesk or TeamViewer.</li>
        <li>This gives them full control over your device.</li>
      </ul>
    </li>
  </ul>
  <p></p>
  <h3>2.2 Why Technical Jargon Can Be Misleading</h3>
  <ul>
    <li>Scammers use terms like “IP conflict,” “driver failure,” or “registry error.”</li>
    <li>Designed to sound convincing, even though the user may not understand them.</li>
  </ul>
  <p></p>
  <h3>2.3 Common Signs of a Tech Support Scam</h3>
  <ul>
    <li>Unsolicited messages or calls claiming system issues.</li>
    <li>Promises to “fix everything remotely” for a fee.</li>
    <li>Scammers may show fake diagnostics or logs.</li>
  </ul>
  <p></p>
  <h3>2.4 Best Practices Against Tech Support Scams</h3>
  <ul>
    <li>Close the browser tab or restart the device—don’t call any number shown in a pop-up.</li>
    <li>Never share passwords or grant remote access to unknown technicians.</li>
    <li>Verify issues through official manufacturer support pages.</li>
    <li>Use browser pop-up blockers and antivirus software.</li>
  </ul>
</section>
<p></p>
<section className="course-section">
  <h2>3. Online Marketplace Scams</h2>
  <h3>3.1 Common Buyer & Seller Traps</h3>
  <ul>
    <li><b>Fake Buyer Scenarios</b>
      <ul>
        <li>Buyer “accidentally overpays” and asks for a refund before payment clears.</li>
        <li>Scam relies on the seller trusting the payment screenshot.</li>
      </ul>
    </li>
    <li><b>Fake Seller Scenarios</b>
      <ul>
        <li>Attractive product listings with prices too low to be real.</li>
        <li>Payment requested upfront via insecure methods like direct bank transfer.</li>
      </ul>
    </li>
  </ul>
  <p></p>
  <h3>3.2 Red Flags in Online Transactions</h3>
  <ul>
    <li>No in-platform communication—scammers request to “chat on WhatsApp.”</li>
    <li>Avoids using platforms with built-in buyer/seller protection.</li>
    <li>Unusual urgency (“first come, first serve!”).</li>
  </ul>
  <p></p>
  <h3>3.3 Best Practices for Safe Online Buying/Selling</h3>
  <ul>
    <li>Always use marketplace apps with payment protection (e.g., Shopee, Lazada, Carousell).</li>
    <li>Meet in public places for high-value items.</li>
    <li>Never send personal info or OTPs to strangers.</li>
    <li>Verify buyer/seller profiles and reviews before transactions.</li>
  </ul>
</section>
<p></p>
<section className="course-section">
  <h2>4. Social Media Phishing via Fake Giveaways</h2>
  <h3>4.1 How Social Platforms Are Abused</h3>
  <ul>
    <li>Fake Instagram pages mimic real brands (e.g., Watsons, Uniqlo).</li>
    <li>Require users to “click the link in bio” to win prizes.</li>
  </ul>
  <p></p>
  <h3>4.2 Lure of Free Items and Engagement Bait</h3>
  <ul>
    <li>“Like, share, and comment to win an iPhone!”</li>
    <li>Scammers use engagement to gain credibility and spread reach.</li>
  </ul>
  <p></p>
  <h3>4.3 Real vs Fake Giveaways</h3>
  <ul>
    <li>Real giveaways are announced on official verified pages.</li>
    <li>Scammers use newly made accounts with few followers or odd handles.</li>
  </ul>
  <p></p>
  <h3>4.4 Best Practices on Social Media Giveaways</h3>
  <ul>
    <li>Confirm giveaways on official websites or verified pages.</li>
    <li>Avoid clicking bio links or filling out forms with personal info.</li>
    <li>Report fake pages to platform moderators.</li>
  </ul>
</section>
<p></p>
<section className="course-section">
  <h2>5. Key Takeaways & Core Learning Objectives</h2>
  <ul>
    <li>Learn to identify scams related to fake job offers, technical support, online marketplaces, and giveaways.</li>
    <li>Understand how urgency, exclusivity, or authority are used to manipulate victims.</li>
    <li>Build habits like verifying domains, rejecting remote access requests, and reporting suspicious activity.</li>
    <li>Practice safe online behavior by using official platforms, avoiding direct transfers, and using security tools.</li>
    <li>Recognize phishing on new fronts like LinkedIn, Instagram, and ecommerce apps.</li>
  </ul>
</section>

  </div>
);

const passwordAwarenessTheory = (
  <div>
    {/* Section 1 */}
    <section className="course-section">
      <h2>1. Message that Claiming Government Aid</h2>
      <h3>1.1. How Phishers Exploit Trust and Emotions</h3>
      <ul>
        <li><b>Appeal to Authority (Government)</b>
          <ul>
            <li>Use of Malay terms like 'kerajaan' and 'Daulat Tuanku' to sound official</li>
            <li>Claiming to be from the government for credibility</li>
          </ul>
        </li>
        <li><b>Financial Incentive as a Lure</b>
          <ul>
            <li>Promises of free aid (e.g., RM 300) targeting economic hardship</li>
            <li>Fear of missing out on government assistance</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>1.2. Recognizing a Fake (Phishing) Link</h3>
      <ul>
        <li><b>URL Structure and Domain Mismatch</b>
          <ul>
            <li>Legitimate: bantuan.rakyat.gov.my</li>
            <li>Phishing: b4ntuan-my-t3rk1ni-cvc07ru29.vercel.app</li>
          </ul>
        </li>
        <li><b>Use of URL Shortening or Gibberish</b>
          <ul>
            <li>Long, confusing links</li>
            <li>Irregular spellings like 't3rk1ni'</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <h3>1.3. Play on Cultural/Emotional Cues</h3>
      <ul>
        <li>Use of greetings like 'Salam' and phrases like 'Daulat Tuanku'</li>
        <li>Manipulation using cultural respect norms</li>
      </ul>
      <p></p>
      <h3>1.4. Best Practices for Messages Claiming Aid</h3>
      <ul>
        <li>Verify sender against official helplines</li>
        <li>Do not click suspicious links</li>
        <li>Cross-check via official 'gov.my' sites</li>
        <li>Report and block suspicious senders</li>
      </ul>
    </section>
    <p></p>
    {/* Section 2 */}
    <section className="course-section">
      <h2>2. Common Signs of a Phishing Message</h2>
      <h3>2.1. Phishing Tactics Overview</h3>
      <ul>
        <li>Credential harvesting through fake login pages</li>
        <li>Use of urgency, fear, or rewards</li>
      </ul>
      <p></p>
      <h3>2.2. Why 'Suspicious Links' Are the Main Red Flag</h3>
      <ul>
        <li>Tiny deviations in domain names</li>
        <li>Misspellings like 'b4nkname-secure.com'</li>
        <li>Personalized greetings do not prove legitimacy</li>
      </ul>
      <p></p>
      <h3>2.3. Best Practices to Identify Phishing Signs</h3>
      <ul>
        <li>Hover or long-press to preview links</li>
        <li>Check sender domains</li>
        <li>Avoid urgent/threatening messages</li>
        <li>Never enter credentials on third-party forms</li>
      </ul>
    </section>
    <p></p>
    {/* Section 3 */}
    <section className="course-section">
      <h2>3. Protecting Yourself from Phishing</h2>
      <h3>3.1. Why Password Hygiene Matters</h3>
      <ul>
        <li>Never reuse passwords</li>
        <li>Use complex and unique passwords</li>
        <li>Use password managers</li>
      </ul>
      <p></p>
      <h3>3.2. Role of Two-Factor Authentication (2FA)</h3>
      <ul>
        <li>Adds extra security layer</li>
        <li>Prevents unauthorized access even with stolen passwords</li>
      </ul>
      <p></p>
      <h3>3.3. Why Clicking Suspicious Links on Mobile Is Not Safer</h3>
      <ul>
        <li>Mobile sites can also be phishing pages</li>
        <li>URL checks and security controls apply on mobile too</li>
      </ul>
      <p></p>
      <h3>3.4. Best Practices for Phishing Prevention</h3>
      <ul>
        <li>Inspect all URLs carefully</li>
        <li>Enable 2FA wherever possible</li>
        <li>Verify before entering credentials</li>
        <li>Use security software</li>
      </ul>
    </section>
    <p></p>
    {/* Section 4 */}
    <section className="course-section">
      <h2>4. Fake Bank Email Asking to Verify Account</h2>
      <h3>4.1. How to Spot a Phony Bank Email</h3>
      <ul>
        <li>Sender domain doesn't match official bank</li>
        <li>Urgent language like 'Frozen Account'</li>
      </ul>
      <p></p>
      <h3>4.2. Why Replying or Clicking Is Dangerous</h3>
      <ul>
        <li>Confirms your email is active</li>
        <li>Links harvest your credentials</li>
      </ul>
      <p></p>
      <h3>4.3. Best Response Strategy</h3>
      <ul>
        <li>Do not reply or click links</li>
        <li>Access bank website directly</li>
        <li>Check for domain spoofing</li>
        <li>Report to bank's fraud department</li>
      </ul>
    </section>
    <p></p>
    {/* Section 5 */}
    <section className="course-section">
      <h2>5. Fake Google Suspension Email</h2>
      <h3>5.1. Anatomy of a Legitimate Google Security Email</h3>
      <ul>
        <li>Official Google domains like 'accounts.google.com'</li>
        <li>Proper URLs like 'https://myaccount.google.com/'</li>
      </ul>
      <p></p>
      <h3>5.2. Why the URL Is the Red Flag</h3>
      <ul>
        <li>Fake links use 'support.google.com.my'</li>
        <li>Google never uses country-specific domains for verification</li>
      </ul>
      <p></p>
      <h3>5.3. Best Practice When Receiving 'Account Suspended' Emails</h3>
      <ul>
        <li>Navigate manually to 'myaccount.google.com'</li>
        <li>Check full email headers</li>
        <li>Enable Gmail phishing detection</li>
      </ul>
    </section>
    <p></p>
    {/* Section 6 */}
    <section className="course-section">
      <h2>6. Phone Scam Involving False Police Threats</h2>
      <h3>6.1. Understanding Voice/Phone Phishing ('Vishing') and Social Engineering</h3>
      <ul>
        <li>Authority abuse</li>
        <li>Urgency and fear tactics</li>
        <li>Secrecy instructions</li>
      </ul>
      <p></p>
      <h3>6.2. Why 'Keep It Secret' Is a Classic Scam Tactic</h3>
      <ul>
        <li>Isolation weakens victim's defense</li>
        <li>Pressure maintained over time</li>
        <li>Avoids involvement of others</li>
      </ul>
      <p></p>
      <h3>6.3. Other Common Phone/Voice Scam Red Flags</h3>
      <ul>
        <li>Caller ID spoofing</li>
        <li>Lack of official documentation</li>
        <li>Unusual payment requests</li>
        <li>No verifiable proof</li>
      </ul>
      <p></p>
      <h3>6.4. Best Practices to Avoid Vishing Scams</h3>
      <ul>
        <li>Hang up and call official lines</li>
        <li>Tell a trusted adult</li>
        <li>Never transfer money without verifying</li>
        <li>Use call-blocking and report scams</li>
      </ul>
    </section>
    <p></p>
    {/* Section 7 */}
    <section className="course-section">
      <h2>7. Key Takeaways & Core Learning Objectives</h2>
      <ul>
        <li>Detect government-themed phishing messages</li>
        <li>Identify red flags in suspicious URLs</li>
        <li>Adopt 2FA and good password practices</li>
        <li>Verify bank and Google emails by domain</li>
        <li>Understand vishing and isolation scams</li>
      </ul>
    </section>
  </div>
);

const authenticationTheory = (
  <div>
    {/* Section 1 */}
<section className="course-section">
  <h2>1. Authentication Methods to Avoid Cyber Threats</h2>

  <h3>1.1. Understanding Authentication Factors</h3>
  <ul>
    <li><b>Something Only You Should Know (Knowledge Factor)</b>
      <ul>
        <li>Examples: Passwords, PINs, security question answers</li>
        <li>Risks: Easy to guess if weak, often reused, can be phished</li>
        <li>Tip: Avoid using names, birthdays, or “123456” as passwords</li>
      </ul>
    </li>
    <li><b>Something Only You Should Have (Possession Factor)</b>
      <ul>
        <li>Examples: OTP apps (like Google Authenticator), smartcards, SMS codes</li>
        <li>Stronger than passwords alone — adds physical verification</li>
        <li>Tip: Use apps over SMS for fewer interception risks</li>
      </ul>
    </li>
    <li><b>Biometric actor (Inherence Factor)</b>
      <ul>
        <li>Examples: Fingerprint, Face ID, iris scan</li>
        <li>Hard to fake but not always available on all devices</li>
        <li>Note: Still need a backup method in case the biometric fails</li>
      </ul>
    </li>
  </ul>

  <p></p>
  <h3>1.2. Multi-Factor Authentication (MFA): Your Strongest Defense</h3>
  <ul>
    <li>MFA = using two or more factors (e.g., password + OTP)</li>
    <li>Blocks over 90% of common phishing and credential-stuffing attacks</li>
    <li>Even if your password is leaked, hackers can't access without the second factor</li>
    <li>Use it for: Banking, Gmail, social media, cloud storage, university accounts</li>
  </ul>

  <p></p>
  <h3>1.3. Stronger Alternatives to Traditional Passwords</h3>
  <ul>
    <li><b>Passkeys:</b>
      <ul>
        <li>Let you log in with fingerprint/face instead of typing a password</li>
        <li>Synced with your device – phishing-resistant</li>
        <li>Used by Google, Apple, Microsoft</li>
      </ul>
    </li>
    <li><b>Authenticator Apps:</b>
      <ul>
        <li>Time-based codes that change every 30 seconds</li>
        <li>Examples: Google Authenticator, Authy, Microsoft Authenticator</li>
        <li>More secure than SMS – works offline</li>
      </ul>
    </li>
    <li><b>Hardware Security Keys:</b>
      <ul>
        <li>USB or NFC-based keys like YubiKey</li>
        <li>Used by journalists, activists, and companies for top-tier protection</li>
        <li>Unphishable – requires physical access</li>
      </ul>
    </li>
  </ul>

  <p></p>
  <h3>1.4. Authentication Mistakes to Avoid</h3>
  <ul>
    <li><b>Don't reuse the same password</b> across multiple accounts</li>
    <li><b>Don’t use SMS OTP if you can use an app</b> – SMS is vulnerable to SIM swapping</li>
    <li><b>Don't ignore login alerts</b> – review unknown logins immediately</li>
    <li><b>Don’t store passwords in plain text</b> – use a password manager</li>
  </ul>

  <p></p>
  <h3>1.5. Best Practices for Safe Authentication</h3>
  <ul>
    <li>Use a mix of authentication factors (password + device + biometrics)</li>
    <li>Enable MFA for all critical accounts</li>
    <li>Use a reputable password manager (Bitwarden, 1Password, etc.)</li>
    <li>Back up recovery codes for authenticator apps</li>
    <li>Regularly audit active sessions and devices from your account settings</li>
  </ul>

  <p></p>
  <h3>1.6. Real-World Example: Securing a University Email</h3>
  <ul>
    <li><b>Scenario:</b> UM student receives a fake email asking to log in to their UM mail</li>
    <li><b>Without MFA:</b> Phisher gains access if student enters password</li>
    <li><b>With MFA:</b> Attack fails – phisher can’t get the code from authenticator app</li>
    <li><b>Lesson:</b> One extra layer can block serious account compromise</li>
  </ul>

  <p></p>
  <h2>2. Key Takeaways & Core Learning Objectives</h2>
  <ul>
    <li>Understand different types of authentication factors</li>
    <li>Recognize why multi-factor authentication (MFA) is crucial</li>
    <li>Explore modern tools like passkeys and hardware tokens</li>
    <li>Avoid common mistakes like password reuse and SMS-based 2FA</li>
    <li>Apply safe authentication habits in academic and personal digital accounts</li>
  </ul>
</section>


  </div>
);



const moduleTheory = {
  1: {
    title: 'Social Media Safety',
    content: socialMediaTheory
  },
  2: {
    title: 'Phishing',
    content: phishingTheory
  },
  3: {
    title: 'Authentication',
    content: passwordAwarenessTheory
  },
  4: {
      title: 'Social Media Safety',
      content: socialMediaTheory2_0
  },
  5: {
    title: 'Phishing',
    content: phishingTheory2_0
  },
  6: {
    title: 'Authentication',
    content: authenticationTheory
  }
};

function CoursesPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = moduleTheory[Number(moduleId)] || { title: 'Course Not Found', content: '' };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <h1>{module.title}</h1>
        <div style={{ margin: '2rem 0', textAlign: 'left' }}>{module.content}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', width: '100%' }}>
          <button
            className="back-btn-pixel"
            style={{
              minWidth: 100,
              background: '#0a192f',
              color: '#64ffda',
              fontWeight: 900,
              fontSize: '1.1rem',
              fontFamily: 'monospace, "Press Start 2P", "VT323", "Courier New", Courier',
              border: '4px solid #64ffda',
              borderRadius: 0,
              boxShadow: '0 0 0 4px #0a192f',
              padding: '1rem 2.5rem',
              cursor: 'pointer',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'transform 0.1s',
              outline: 'none',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(2px)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            onClick={() => navigate(-1)}
          >
            BACK
          </button>
          <button
            className="quiz-btn-pixel"
            style={{
              minWidth: 120,
              background: '#0a192f',
              color: '#64ffda',
              fontWeight: 900,
              fontSize: '1.1rem',
              fontFamily: 'monospace, "Press Start 2P", "VT323", "Courier New", Courier',
              border: '4px solid #64ffda',
              borderRadius: 0,
              boxShadow: '0 0 0 4px #0a192f',
              padding: '1rem 2.5rem',
              cursor: 'pointer',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'transform 0.1s',
              outline: 'none',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(2px)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            onClick={() => navigate('/quiz', { state: { moduleId: Number(moduleId) } })}
          >
            QUIZ
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage; 