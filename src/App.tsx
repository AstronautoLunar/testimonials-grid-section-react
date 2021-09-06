import Card from "./components/Card";

import imageDaniel from "./assets/image-daniel.jpg"
import imageJonathan from "./assets/image-jonathan.jpg"
import imageJeanette from "./assets/image-jeanette.jpg"
import imagePatrick from "./assets/image-patrick.jpg"
import imageKira from "./assets/image-kira.jpg"
import bgPatternQuotation from "./assets/bg-pattern-quotation.svg"


import styles from './styles/Home.module.scss';

export default function App() {
  
  const cards = [
    {
      id: 1,
      srcBgImage: bgPatternQuotation,
      srcUserImage: imageDaniel,
      nameUser: "Daniel Clifford",
      altUser:"User image Daniel Clifford",
      title: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      paragraph: "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup",
      idGridArea: "area1",
      backgroundColor: "var(--moderate-violet)"
    },
    {
      id: 2,
      srcBgImage: undefined,
      srcUserImage: imageJonathan,
      nameUser: "Jonathan Walters",
      altUser: "User image Jonathan Walters",
      title: "The team was very supportive and kept me motivated",
      paragraph: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
      idGridArea: "area2",
      backgroundColor: "var(--very-dark-grayish-blue)"
    },
    {
      id: 3,
      srcBgImage: undefined,
      srcUserImage: imageJeanette,
      nameUser: "Jeanette Harmon",
      altUser: "User image Jeanette Harmon",
      title: "An overall wonderful and rewarding experience",
      paragraph: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
      idGridArea: "area3",
      backgroundColor: "var(--white)"
    },
    {
      id: 4,
      srcBgImage: undefined,
      srcUserImage: imagePatrick,
      nameUser: "Patrick Abrams",
      altUser: "User image Patrick Abrams",
      title: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      paragraph: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people..",
      idGridArea: "area4",
      backgroundColor: "var(--very-dark-blackish-blue)"
    },
    {
      id: 5,
      srcBgImage: undefined,
      srcUserImage: imageKira,
      nameUser: "Kira Whittle",
      altUser: "User image Kira Whittle",
      title: "Such a life-changing experience. Highly recommended!",
      paragraph: "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
      idGridArea: "area5",
      backgroundColor: "var(--white)"
    }
  ]

  const pathMyGithub = "https://github.com/Pyedrown"

  // Desenvolver os dados dos cards

  return (
    <div className={styles.App}>
      <main id={styles.main}>
        {
          cards.map(item => (
            <Card
              key={item.id}
              srcBgImage={item.srcBgImage}
              srcUserImage={item.srcUserImage}
              nameUser={item.nameUser}
              altUser={item.altUser}
              title={item.title}
              paragraph={item.paragraph}
              idGridArea={item.idGridArea}
              backgroundColor={item.backgroundColor}
            />
          ))
        }
      </main>
      <footer id={styles.footer}>
        <div className={styles.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href={ pathMyGithub }>Pyedrown</a>.
        </div>
      </footer>
    </div>
  );
}
