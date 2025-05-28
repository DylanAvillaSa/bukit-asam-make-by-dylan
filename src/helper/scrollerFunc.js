const scrollToHome = () => {
  homeRef.current?.scrollIntoView({ behavior: "smooth" });
};

const scrollToAboutUs = () => {
  aboutRef.current?.scrollIntoView({ behavior: "smooth" });
};

const scrollToIssue = () => {
  issueRef.current?.scrollIntoView({ behavior: "smooth" });
};

const scrollToCategory = () => {
  categoryRef.current?.scrollIntoView({ behavior: "smooth" });
};

const scrollToSchedule = () => {
  scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
};
