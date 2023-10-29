export const ANNUAL_INCOME_OPTIONS = [
  { label: "$0 - $18,200", value: "0%" },

  { label: "$18,201 - $45,000", value: "Nil + 19% of excess over $18,200" },
  {
    label: "$45,001 - $120,000",
    value: "$5,092 + 32.5% of excess over $45,000",
  },
  {
    label: "$120,001 - $180,000",
    value: "$29,467 + 37% of excess over $120,000",
  },
  { label: "$180,001+", value: "$51 ,667 + 45% of excess over $180,000" },
];

export const TYPES_OF_INVESTMENT = [
  { label: "investmentType", value: "Short Term", icon: "<" },
  { label: "long", value: "Long Term", icon: ">" },
];

export const INCOME = {
  "0%": 0,
  "Nil + 19% of excess over $18,200": 0.19,
  "$5,092 + 32.5% of excess over $45,000": 0.325,
  "$29,467 + 37% of excess over $120,000": 0.37,
  "$51 ,667 + 45% of excess over $180,000": 0.45,
};
export const INITIAL_VALUES = {
  purchasePrice: "",
  salePrice: "",
  expenses: "",
  investmentType: "Long Term",
  annualIncome: "0%",
};

export const INITIAL_RESULT = {
  capitalGain: 0,
  longTermDiscount: 0,
  netCapital: 0,
  tax: 0,
};

export const FAQ_DATA = [
  {
    question: "How are cryptocurrencies taxed in Australia?",
    paragraph1:
      "The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.",
  },
  {
    question:
      "What's the difference between long-term and short-term capital gains?",
    paragraph1:
      "The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.",
  },

  {
    question: "Do I have to pay tax on crypto-to-crypto transactions?",
    paragraph1:
      "Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.",
    paragraph2:
      "Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free.",
  },
  {
    question: "How do I lower my cryptocurrency taxes?",
    paragraph1:
      "Here are the top 6 strategies for lowering your cryptocurrency taxes in Australia:",

    bullets: [
      {
        heading: "Hold for over 12 months",
        desc: "Hold your crypto for more than 12 months to qualify for a 50% long-term CGT discount to reduce your tax liability.",
      },
      {
        heading: "Hold for over 12 months",
        desc: "Hold your crypto for more than 12 months to qualify for a 50% long-term CGT discount to reduce your tax liability.",
      },
      {
        heading: "Claim tax deductions",
        desc: "Explore opportunities to claim significant deductions on your regular income if you're a trader or running a crypto business.",
      },

      {
        heading: "Use crypto tax tools",
        desc: "Employ crypto tax software like KoinX or seek help from a crypto tax specialist to streamline calculations and ensure compliance.",
      },
      {
        heading: "Donate to charities",
        desc: "Donate cryptocurrency to registered charities since it's not a taxable event, and claim deductions on the donated amount.",
      },
      {
        heading: "Full disclosure",
        desc: "Be transparent and disclose all your crypto transactions to the ATO to avoid penalties for hiding trading activities.",
      },
    ],
  },

  {
    question: "Can the ATO track crypto?",
    paragraph1:
      "The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATO's data matching program. active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.",
  },
  {
    question: "What is the best crypto tax calculator for Australia?",
    paragraph1:
      "KoinX is a crypto tax platform that makes it easy to calculate tax on crypto transactions. It also provides portfolio insights of all crypto exchange accounts combined, making it a valuable tool for chartered accountants and VDA Investors alike.",
  },
  {
    question: "Do I have to pay tax if I lose money trading crypto?",
    paragraph1:
      "In Australia, when your cryptocurrency loses value. it'S classified as a capital loss. This means you won't have to pay taxes on that loss. It'S a way to offset any gains you might have made in other investments for tax purposes.",
  },
  {
    question: "Is using a crypto tax calculator safe?",
    paragraph1:
      "KoinX provides a reliable crypto tax calculator that can assist you in determining your tax obligations for cryptocurrency transactions. This tool accurately tracks your portfolio on your preferred exchange and  computes your gains or losses based on the crypto amounts and prices involved.",
  },
  {
    question: "Which exchanges do you support?",
    paragraph1:
      "KoinX seamlessly integrates with a wide array of exchanges, including Binance, CoinSpot. MEXC, Bybit, Coinbase, Kraken, and numerous others. It effortlessly consolidates cryptocurrency transactions from over 180+ chains, exchanges, and wallets. presenting them in a user-friendly unified dashboard.",
  },
  {
    question:
      "Do I have to pay tax if I transfer crypto from one wallet to another?",
    paragraph1:
      "Transferring cryptocurrency from one wallet to another that you own in Australia is not subject to tax, as it is not recognised as a taxable event. and capital gains tax is not triggered. Nevertheless. it'S essential to keep detailed records of these transfers, particularly if you are utilising automated crypto tax software like KoinX. KoinX, as a reliable crypto tax software, can streamline the process, making it easier to maintain accurate and efficient tax records and reporting while ensuring compliance with Australian tax regulations.",
  },
];
