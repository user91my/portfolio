import baseURL from "../../../components/baseURL";

export const educationData = [
  {
    logo: (
      <img
        src={`${baseURL}/assets/logos/fcc.JPG`}
        alt="fcc"
        width="80px"
        height="70px"
        style={{
          position: "absolute",
          left: "-4px",
          top: "1px",
        }}
      />
    ),
    institution: "freeCodeCamp.org",
    course: [
      {
        module: "Front End Development Libraries",
        period: "May 2022 - Nov 2022",
      },
      {
        module: "Javascript Algorithms and Data Structures",
        period: "Jan 2022 - Apr 2022",
      },
    ],
  },
  {
    logo: (
      <img
        src={`${baseURL}/assets/logos/acca.JPG`}
        alt="acca"
        width="78px"
        height="63px"
        style={{
          position: "absolute",
          left: "-3px",
          top: "4px",
        }}
      />
    ),
    institution: "Association of Chartered Certified Accountants (ACCA)",
    course: [
      {
        module: "Taxation & Financial Accounting",
        period: "June 2021 - Dec 2021",
      },
      {
        module: "Diploma in Accounting & Business",
        period: "May 2016 - Dec 2019",
      },
    ],
  },
  {
    logo: (
      <img
        src={`${baseURL}/assets/logos/uol.JPG`}
        alt="uol"
        width="75px"
        height="80px"
        style={{
          position: "absolute",
          left: "-1px",
          top: "-6px",
        }}
      />
    ),
    institution: "University of London",
    course: [
      {
        module: "Bachelor of Laws Programme (LLB)",
        period: "May 2010 - May 2012",
      },
    ],
  },
];
