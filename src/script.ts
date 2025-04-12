interface IParticipant {
    firstName: string;
    lastName: string;
    countryOfOrigin: string;
    educationLevel: string;
    languageSkills: string[];
    trainingField: string;
    enrollInCourse(course: ICourse): void;
  }
  
  interface ICourse {
    title: string;
    description: string;
    professionalSector: string;
    duration: number;
    enrolledParticipants: IParticipant[];
    addParticipant(participant: IParticipant): void;
  }
  
  interface ICompany {
    companyName: string;
    businessSector: string;
    description: string;
    openPositions: string[];
    offerPosition(participant: IParticipant, position: string): void;
  }
  
  class Participant implements IParticipant {
    constructor(
      public firstName: string,
      public lastName: string,
      public countryOfOrigin: string,
      public educationLevel: string,
      public languageSkills: string[],
      public trainingField: string
    ) {}
  
    enrollInCourse(course: ICourse): void {
      console.log(`${this.firstName} ${this.lastName} has enrolled in the course: ${course.title}`);
      course.addParticipant(this);
    }
  }
  
  class Course implements ICourse {
    enrolledParticipants: IParticipant[] = [];
  
    constructor(
      public title: string,
      public description: string,
      public professionalSector: string,
      public duration: number
    ) {}
  
    addParticipant(participant: IParticipant): void {
      this.enrolledParticipants.push(participant);
      console.log(`Participant ${participant.firstName} ${participant.lastName} added to the course: ${this.title}`);
    }
  }
  
  class Company implements ICompany {
    constructor(
      public companyName: string,
      public businessSector: string,
      public description: string,
      public openPositions: string[]
    ) {}
  
    offerPosition(participant: IParticipant, position: string): void {
      if (this.openPositions.includes(position)) {
        console.log(`${this.companyName} offers the position "${position}" to ${participant.firstName} ${participant.lastName}.`);
      } else {
        console.log(`The position "${position}" is not available at ${this.companyName}.`);
      }
    }
  }
  
  const participant1 = new Participant(
    "Mario",
    "Rossi",
    "Italy",
    "High School Diploma",
    ["Italian", "English"],
    "Computer Science"
  );
  
  const participant2 = new Participant(
    "Luigi",
    "Bianchi",
    "Morocco",
    "University Degree",
    ["Arabic", "French", "Italian"],
    "Marketing"
  );
  
  const participant3 = new Participant(
    "Fatima",
    "El Mansouri",
    "Tunisia",
    "High School Diploma",
    ["Arabic", "English"],
    "Design"
  );
  
  const courseCS = new Course(
    "Computer Science Course",
    "Introduction to programming, algorithms, and web development.",
    "Technology",
    40
  );
  
  const courseMarketing = new Course(
    "Digital Marketing Course",
    "Online marketing strategies, social media, and digital advertising.",
    "Marketing",
    30
  );
  
  const courseDesign = new Course(
    "Graphic Design Course",
    "Basics of design, use of main graphic software, and creative techniques.",
    "Design",
    35
  );
  
  const partnerCompany = new Company(
    "TechSolutions",
    "Technology",
    "Leading IT company promoting migrant inclusion in the workforce.",
    ["Junior Developer", "IT Technician"]
  );
  
  participant1.enrollInCourse(courseCS);
  participant2.enrollInCourse(courseMarketing);
  participant3.enrollInCourse(courseDesign);
  participant2.enrollInCourse(courseCS);
  
  partnerCompany.offerPosition(participant1, "Junior Developer");
  partnerCompany.offerPosition(participant3, "Graphic Designer");
  
  console.log("\nParticipants in the Computer Science Course:", courseCS.enrolledParticipants);
  console.log("Participants in the Marketing Course:", courseMarketing.enrolledParticipants);
  console.log("Participants in the Design Course:", courseDesign.enrolledParticipants);
  