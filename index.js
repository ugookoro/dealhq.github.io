var app = new Vue({
    el: '#app',
    data: {
        compliances: [
            {
                Requirement: "Memorandum of association indicates that the entity is a private company.",
                Category: "Corporate",
                SourceLaw: "CAMA S.22",
                Penalty: "Loss of privileges and exemptions conferred on private companies by CAMA",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Restrict the transfer of shares in the Articles of Association.",
                Category: "Corporate",
                SourceLaw: "CAMA S.22(2)",
                Penalty: "Loss of privileges and exemptions conferred on private companies by CAMA",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The total number of Shareholders does not exceed 50 (excluding employees).",
                Category: "Corporate",
                SourceLaw: "CAMA S.22 (3)",
                Penalty: "Loss of privileges and exemptions conferred on private companies by CAMA",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Authorised share capital not less than N10,000.",
                Category: "Corporate",
                SourceLaw: "CAMA S.27(2)(a)",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Subscribers hold no less than 25% of the authorised share capital",
                Category: "Corporate",
                SourceLaw: "CAMA S.27(2)(b)",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Maintain a register of members",
                Category: "Corporate",
                SourceLaw: "CAMA S.83(1)",
                Penalty: "Fine of N25 and a daily default fine of N5.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Maintain a minute book for all meetings.",
                Category: "Corporate",
                SourceLaw: "CAMA S.241",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Statutory notice for shareholder meetings is at least 21 days from date the notice was sent.",
                Category: "Corporate",
                SourceLaw: "CAMA S.217(1)",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Notice of meeting shall acknowledge the right of a Shareholder to attend meetings by a proxy.",
                Category: "Corporate",
                SourceLaw: "CAMA S.218(4)",
                Penalty: "Fine of N500 payable by the officer in default.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Keep a register of directors and secretaries at the registered or designated office.",
                Category: "Corporate",
                SourceLaw: "CAMA S.292",
                Penalty: "Fine of N50 payable by the Company and all its officers.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Accounting records contain entries from day to day of all sums of money received and expended, and the matters in respect of which the receipt and expenditure took place; with a record of the assets and liabilities of the company.",
                Category: "Corporate",
                SourceLaw: "CAMA S.331",
                Penalty: "Imprisonment for a term not exceeding six (6) months or fine of N500.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Accounting records must be open to inspection by officers of the Company and preserved for a period of six (6) years.",
                Category: "Corporate",
                SourceLaw: "CAMA S.332",
                Penalty: "Imprisonment for a term not exceeding six (6) months or fine of N500.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "An auditor is appointed to audit the Company’s financial statement to be presented at each annual general meeting and Auditors hold office from the date of appointment at a general meeting until the conclusion of the next Annual General Meeting.",
                Category: "Corporate",
                SourceLaw: "CAMA S.357",
                Penalty: "Fine of N100 for every day the default continues payable by the Company and all its offers.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Once every year, deliver to the CAC an annual return, to be completed within 42 days after the annual general meeting and signed by a director and secretary of the company.",
                Category: "Corporate",
                SourceLaw: "CAMA S.370",
                Penalty: "Fine of N100 payable by the Company and every director.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Deliver to the CAC, along with the Annual Return, a certificate signed both by a director and company secretary stating that of the company that the company has not, (since the date of the last return, or, in the case of a first return, since the date of the incorporation of the company), issued any invitation to the public to subscribe for any shares or debentures of the Company.",
                Category: "Corporate",
                SourceLaw: "CAMA S.376(1)",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board Charter sets out the responsibilities of the Board and each committee.",
                Category: "Governance",
                SourceLaw: "CGC S.1",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board has considered the following in determining the requite number of its members.",
                Category: "Governance",
                SourceLaw: "CGCS 2.3",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Majority of the Board members are Non-Executive Directors.",
                Category: "Governance",
                SourceLaw: "CGCS 2.4",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Chairman of the Board is a Non-Executive Director uninvolved in day-to-day operations.",
                Category: "Governance",
                SourceLaw: "CGCS 2.7",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The MD/CEO is the head of the management team and is answerable to the Board.",
                Category: "Governance",
                SourceLaw: "CGCS 2.9",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The authority of the MD/CEO and the relationship with the Board are clearly set out in his/her contract of employment.",
                Category: "Governance",
                SourceLaw: "CGCS 2.9",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board has a policy on diversity(promoting gender, age and cultural diversity) amongst others.",
                Category: "Governance",
                SourceLaw: "CGCS 3.2 ",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The positions of the Chairman of the Board and the Managing Director/Chief Executive Officer (MD/CEO) are separate.",
                Category: "Governance",
                SourceLaw: "CGCS 4.5",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Chairman of the Board does not to serve as chairman or member of any Board committee.",
                Category: "Governance",
                SourceLaw: "CGCS 4.7",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The MD/CEO or an Executive Director not to serve as chairman of any Board committee.",
                Category: "Governance",
                SourceLaw: "CGCS 5.5",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Chairman of the Board is a Non-Executive Director and not be involved in the day-to-day operations of the Company.",
                Category: "Governance",
                SourceLaw: "CGCS 5.6",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The MD/CEO and the relationship between him and the Board is clearly set out in a contract of employment.",
                Category: "Governance",
                SourceLaw: "CGCS 8.3",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The MD/CEO is not a member of the committees responsible for remuneration, audit, or nomination and governance.",
                Category: "Governance",
                SourceLaw: "CGCS 8.5",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "An Executive Director is not a member of the committees responsible for remuneration, audit, or nomination and governance.",
                Category: "Governance",
                SourceLaw: "CGCS 9.1 & 9.2",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The responsibilities and authority of Executive Directors are clearly set out in their contract of employment.",
                Category: "Governance",
                SourceLaw: "CGCS 10.1",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Company Secretary is properly empowered by the Board to discharge his/her duties and responsibilities.",
                Category: "Governance",
                SourceLaw: "CGCS 10.3",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Directors, especially Non-Executive Directors have access to independent professional advice as and when needed and at the Company’s expense.",
                Category: "Governance",
                SourceLaw: "CGCS 11.1.3",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "In order to effectively perform its oversight function and monitor management’s performance, the Board to meet at least once every quarter.",
                Category: "Governance",
                SourceLaw: "CGCS 11.1.5",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Minutes of Meetings are formally reviewed and approved by the members of the Board or relevant Board committee at its next meeting",
                Category: "Governance",
                SourceLaw: "CGCS 11.1.6",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Each Board Committee to have a Board-approved committee charter setting out the terms of reference and composition of such committee, which is to be reviewed periodically.",
                Category: "Governance",
                SourceLaw: "CGCS 11.1.8",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Each committee is composed of at least three members. Individual Board committee charters will indicate where Independent Non-Executive Directors are required.",
                Category: "Governance",
                SourceLaw: "CGCS 11.1.9",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board has established the core governance committees [ nomination and governance, remuneration, audit and risk management].",
                Category: "Governance",
                SourceLaw: "CGCS 11.1.10",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The chairmen of Board committees are appointed by the Board.",
                Category: "Governance",
                SourceLaw: "CGCS 11.2.2",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board ensures that, in appointing members of the Board committees, there is a balanced distribution of power in respect of membership across committees so that no individual has the ability to dominate decision making and undue reliance is not placed on any individual.",
                Category: "Governance",
                SourceLaw: "CGCS 11.2.3 & 11.3.3",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Company Secretary, or any other officer in the office of the Company Secretary, is the secretary of all Board committees.",
                Category: "Governance",
                SourceLaw: "CGCS 11.2.4",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Members of the committee responsible for nomination and governance are Non-Executives Directors, and a majority of them are Independent Non-Executive Directors.",
                Category: "Governance",
                SourceLaw: "CGCS 11.2.5.7",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The chairman of each committee is a Non-Executive Director.",
                Category: "Governance",
                SourceLaw: "",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The committees of the Board  meet at least twice a year or such number of times as may be appropriate to discharge their duties.",
                Category: "Governance",
                SourceLaw: "CGC S.11.3.4",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Nomination and Governance Committee has ensured that the Company has a succession policy and plan in place for the Chairman of the Board, the MD/CEO and all other Executive Directors, Non-Executive Directors and senior management positions to ensure leadership continuity.",
                Category: "Governance",
                SourceLaw: "CGC S.11.4.2",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Members of the committee responsible for remuneration are Non-Executive Directors and a majority of them are Independent Non-Executive Directors.",
                Category: "Governance",
                SourceLaw: "CGC S.11.4.2",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Remuneration Committee meets at least once a year or such number of times as may be appropriate to discharge its duties.",
                Category: "Governance",
                SourceLaw: "CGC S.11.4.3",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "All members of remuneration committee are financially literate and are able to read and understand financial statements.",
                Category: "Governance",
                SourceLaw: "CGC S.11.4.5",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Members of the committee responsible for audit are Non-Executive Directors, and a majority of them are Independent Non-Executive Directors.",
                Category: "Governance",
                SourceLaw: "CGC S.11.4.8",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Audit Committee to meet at least once every quarter..",
                Category: "Governance",
                SourceLaw: "CGC S.11.5.2",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "At least once in a year, the audit committee holds a discussion with the head of the internal audit function and the external auditors without the presence of management, to facilitate an exchange of views and concerns that may not be appropriate for open discussion.",
                Category: "Governance",
                SourceLaw: "CGC S.11.5.4",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Constitution of the risk management committee is majority Non-Executive Directors and one or more Executive Directors.",
                Category: "Governance",
                SourceLaw: "CGC S.11.5.5",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Risk Management Committee meet at least twice every financial year, or such number of times as may be appropriate to discharge its duties.",
                Category: "Governance",
                SourceLaw: "CGC S.11.5.7",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Head of Risk management is a member of senior management of the Company, with relevant qualifications and experience and attends risk management committee meetings.",
                Category: "Governance",
                SourceLaw: "CGC S.12.1",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board has approved the criteria for appointing Directors, as recommended by the committee responsible for nomination and governance.",
                Category: "Governance",
                SourceLaw: "CGC S.12.6",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Company has stated the processes used in relation to all Board appointments in its annual report.",
                Category: "Governance",
                SourceLaw: "CGC S.12.10",
                Penalty: "BOJ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The tenure for Independent Non-Executive Directors not to exceed three terms of three years each.",
                Category: "Governance",
                SourceLaw: "CGC S.13.1",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board has a formal induction programme for new Directors of the Company.",
                Category: "Governance",
                SourceLaw: "CGC S.14.1",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board has an established system of annual evaluation of its own performance, that of its committees, the Chairman and individual Directors by an independent external consultant.",
                Category: "Governance",
                SourceLaw: "CGC S.15.1",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Board has an established system of corporate governance evaluation, assessing the extent of application of the Nigerian Corporate Governance Code 2018, which is carried out by an independent external consultant at least once in three years.",
                Category: "Governance",
                SourceLaw: "CGC S.15.2",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "A summary of the report of the annual corporate governance evaluation is included in the Company’s annual report and on the investors’ portal of the Company.",
                Category: "Governance",
                SourceLaw: "CGC S.16.3",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "The Company has a remuneration policy designed by its remuneration committee.",
                Category: "Governance",
                SourceLaw: "CGC S.16.7",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Contributes to the ITF, one percent (1%) of the amount of the annual payroll (when there are twenty-five or more employees).",
                Category: "Taxation",
                SourceLaw: "ITFA S.6(1)",
                Penalty: "Five per cent (5%) of the amount unpaid due each month.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Upon payment of annual training levies:  (a) provides adequate training for indigenous staff with a view to improving on the skills related to their job and evidence of such training is forwarded to the ITF; (b)accepts students for industrial attachment purposes.",
                Category: "Taxation",
                SourceLaw: "ITFA S.8(1)",
                Penalty: "(a) Fine of N5, 000 for the first breach and N10, 000 for each subsequent breach payable by the Company; (b)Two (2) years imprisonment or fine of N1,000 for a first breach and two (2) years imprisonment without option of fine for each subsequent breach for the principal officers of the company.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Files at least once a year without notice or demand, a return with the board in the prescribed form and containing prescribed information together with the following; The audited accounts, tax and capital allowances computations and a true and correct statement in writing containing the amounts of its profits from each and every source computed in accordance with the provisions of this Act and any rules made thereunder",
                Category: "Taxation",
                SourceLaw: "CITA S. 55(1)",
                Penalty: "N2,500 in the first month of breach N500 for each subsequent month which the breach continues. ",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Pays not later than three months from the commencement of each year of assessment, provisional tax of an amount equal to the tax paid by such company in the immediately preceding year of assessment in one lump",
                Category: "Taxation",
                SourceLaw: "CITA S. 77(1)",
                Penalty: "10% per annum of the tax payable in addition to interest at bank lending rate from the due date. ",
                Comments: undefined,
                ComplianceLevel: undefined
            },

            {
                Requirement: "Makes contribution for any employee in the following rates relating to these monthly emoluments  (a) A minimum of ten percent (10%) by the employer; and (b) A minimum of eight percent(8%) the employee.(for every employer having 15 or more employees)",
                Category: "Pension",
                SourceLaw: "PRA S.4(1)",
                Penalty: "Not less than 2% of the due contribution.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "In addition to the specified rates above, maintains a group life insurance policy in favour of each employee for a minimum of three times the annual total emolument of the employee and premium is paid not later than the date of commencement of the cover.",
                Category: "Pension",
                SourceLaw: "PRA S.4(5)",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Professionals who hold practicing certificates and are appointed or offer any service for remuneration must be registered..",
                Category: "Financial Information",
                SourceLaw: "FRCNA S. 41(1)",
                Penalty: "Fine of N500, 000 or a term of imprisonment of six (6) months or both.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Every registration is valid for 2 years; renewal of registration must be made by written application 3 months before the expiry of registration.",
                Category: "Financial Information",
                SourceLaw: "FRCNA 42(1)",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "Ensures that the financial statements or reports are in compliance with the accounting and financial reporting standards developed by the Council.",
                Category: "Financial Information",
                SourceLaw: "FRCNA S.44(1)(b)",
                Penalty: "Fine not exceeding N10,000,000 or imprisonment of not more than 2 years.",
                Comments: undefined,
                ComplianceLevel: undefined
            },
            {
                Requirement: "For any financial statements and report filed with any government department or authority, a copy of the financial statements and reports is filed with the Council within 30 days, in such manner as may be set out in the rules of the Council.",
                Category: "Financial Information",
                SourceLaw: "FRCNA S. 58 (3)",
                Penalty: "",
                Comments: undefined,
                ComplianceLevel: undefined
            },


        ],
        corporateRequirements: [],
        pensionRequirements: [],
        financialRequirements: [],
        governanceRequirements: [],
        taxationRequirements: [],
        complianceLevels: {
            corporate: 0,
            financial: 0,
            taxation: 0,
            governance: 0,
            pension: 0
        },
        complete: false
    },

    filters: {
        compliance: function (value) {
            let result = '';
            switch (value) {
                case '2':
                    result = 'Compliant';
                    break;
                case '1':
                    result = 'Partial Compliance';
                    break;
                case '0':
                    result = 'Non-Compliant';
                    break;

                default:
                    result = 'Not Applicable';

                    break;
            }

            return result;
        }
    },
    methods: {
        generateReport() {
            this.complianceLevels.corporate = (this.corporateRequirements.filter(x => x.ComplianceLevel === '2').length / this.corporateRequirements.length) * 100.00;
            this.complianceLevels.pension = (this.pensionRequirements.filter(x => x.ComplianceLevel === '2').length / this.pensionRequirements.length) * 100.00;
            this.complianceLevels.taxation = (this.taxationRequirements.filter(x => x.ComplianceLevel === '2').length / this.taxationRequirements.length) * 100.00;
            this.complianceLevels.financial = (this.financialRequirements.filter(x => x.ComplianceLevel === '2').length / this.financialRequirements.length) * 100.00;
            this.complianceLevels.governance = (this.governanceRequirements.filter(x => x.ComplianceLevel === '2').length / this.governanceRequirements.length) * 100.00;
            this.complete = true;
        }
    },
    mounted() {
        this.corporateRequirements = this.compliances.filter(x => x.Category === "Corporate");
        this.pensionRequirements = this.compliances.filter(x => x.Category === "Pension");
        this.financialRequirements = this.compliances.filter(x => x.Category === "Financial Information");
        this.taxationRequirements = this.compliances.filter(x => x.Category === "Taxation");
        this.governanceRequirements = this.compliances.filter(x => x.Category === "Governance");


    }
});


