import baseURL from "../../../components/baseURL";

export const experienceData = [
  {
    role: "Senior Audit & Accounting Associate",
    company: "A.L. Tan & Co Chartered Accountants",
    period: "Oct 2017 - Feb 2021",
    description: `Ensuring the compliance of Company Financial Statements with
        with local and International Accounting Standards`,
    responsibility: (
      <ul style={{ listStyleType: "square" }}>
        <li>
          Conducted over 100+ Statutory Audits of Company accounts in the
          manufacturing, transport and primary sectors.
        </li>
        <li>
          Liase with companies over the potential tax implications arising out
          of any significant audit-related adjustments on the Company's
          accounts.
        </li>
        <li>
          Managed and coordinated a team of auditors when undertaking audits of
          larger companies.
        </li>
        <li>
          As an accounting associate, bookkeep company accounts and filed
          individual clients' personal taxes to the Inland Revenue Board.
        </li>
      </ul>
    ),
    logo: (
      <img
        src={`${baseURL}/assets/logos/altanco.JPG`}
        alt="altanco"
        width="75px"
        height="80px"
        style={{
          position: "absolute",
          left: "-1px",
          top: "-7px",
        }}
      />
    ),
  },
  {
    role: "Training Consultant",
    company: "Trans Development Corporation S/B",
    period: "Jul 2012 - May 2016",
    description: `Involved in the organizing and conduct of Personal Development
      seminars that has a track record of over 40 years`,
    responsibility: (
      <ul style={{ listStyleType: "square" }}>
        <li>
          Delivered a combined 100+ hours of personal development sessions to
          over 500+ participants.
        </li>
        <li>
          Involved in the recruitment process of prospective seminar
          participants.
        </li>
        <li>
          Organized notes and multimedia presentations for upcoming seminars /
          workshops.
        </li>
      </ul>
    ),
    logo: (
      <img
        src={`${baseURL}/assets/logos/tdc.JPG`}
        alt="tdc"
        width="75px"
        height="75px"
        style={{
          position: "absolute",
          left: "0px",
          top: "-1px",
        }}
      />
    ),
  },
];
