import { useState } from 'react';
import './App.css';
import {InitialPayment} from './components/initialPayment.jsx'
import { definitionOnYear } from './components/buttonsArrayCreate/definitionOnYear.js';

function App() {
  const [downPayment, setDownPayment] = useState(0)
  const [term, setTerm] = useState(30);
  
  return (<>
    <InitialPayment
      title={'Срок кредита'}
      value={downPayment}
      min={0}
      max={30}
      suggestedValues={[3, 10, 15, 20]}
      onValueChange={setDownPayment}
      unit={definitionOnYear}
    />

    <InitialPayment
      title={'Первоначальный взнос'}
      value={term}
      min={0}
      max={100}
      suggestedValues={[10, 15, 30, 50, 80]}
      onValueChange={setTerm}
      unit={() => '%'}
    />

  </>)
}

export default App;

const response = {
  lkkService: {
    status: 'stopped',
    submissions: []
  },
  userService: {
    banksWithZaslonka: [
      'bank-vtb',
      'bank-gpb'
    ],
    user: {
      userId: 'e03f582d-bc95-41f1-81cb-e529ffd551b6',
      applicationId: 'c4dd3e9f-cbe9-4b2d-8ca2-d853fd272009',
      borrowerMobilePhone: '+7 (999) 777 77 77',
      seqno: 553,
      toggles: [
        'cfTeam',
        'vtbLkkTeam'
      ],
      wantsConsumerLoan: false,
      isMarried: false,
      cityKladr: '6903400100000',
      gender: 'male',
      firstName: 'ÐœÐ°Ñ…',
      cianRegionId: 4619,
      abGroup: 60,
      sessionId: 'fincian_c25a3714-6369-47d5-96b1-33f0843d9adc'
    },
    offersInfo: {
      bankSubmissions: {},
      banksWithLk: [
        'bank-rshb',
        'bank-alfa'
      ],
      sentOffers: [],
      sentPersonalLoanOffers: []
    }
  },
  filtersService: {
    loanType: 'MORTGAGE',
    mortgage: {
      excludedBanks: [],
      mortgageProduct: {
        id: 'cottage',
        productType: 'ALL'
      },
      insurance: true,
      discount: [
        'PFR_DISCOUNT',
        'ONLINE_REG_DISCOUNT',
        'FAST_ISSUE_DISCOUNT'
      ]
    },
    personalLoan: {
      excludedBanks: [],
      insurance: false
    }
  },
  sortingService: 'rate',
  ipotekaCenter: [],
  offers: {
    list: [
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8a8',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.4,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'ONLY_PASSPORT',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.789'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8a9',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.4,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'ONLY_PASSPORT',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.791'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8aa',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'ONLY_PASSPORT',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.792'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8ab',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1269,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 24651344,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.792'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8ac',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.793'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8ad',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.4,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'ONLY_PASSPORT',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.794'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8ae',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 25567233,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.795'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8af',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 25567233,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.796'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b0',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'ONLY_PASSPORT',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.797'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b1',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.058,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_FAMILY',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.797'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b2',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.058,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.798'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b3',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.799'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b4',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.4,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'ONLY_PASSPORT',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.8'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b5',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.801'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b6',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.802'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b7',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.803'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b8',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.08,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'MATERNITY_CAPITAL',
          'GOS_HELP_COVID',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.803'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8b9',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 25567233,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.804'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8ba',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 25567233,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.805'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8bb',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 25567233,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.806'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8bc',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'MORT',
        rate: 0.1219,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.2,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 25567233,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.807'
      },
      {
        bankId: 'bank-alfa',
        offerId: '63b667416de52f63c2dff8bd',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'MORT',
        rate: 0.1169,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.99,
        maxPayment: 266733,
        minAmount: 600000,
        maxAmount: 26545523,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'CLIENT_TYPE',
            value: 'WALK_IN'
          },
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [
          'DISCOUNT_FOR_CIAN',
          'MATERNITY_CAPITAL',
          'MORTGAGED_PROPERTY',
          'ONLINE_APPROVAL'
        ],
        expireAt: '2023-02-04T08:59:29.808'
      },
      {
        bankId: 'bank-delta',
        offerId: '1',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.099,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 29136882,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '2',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.102,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '4',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.104,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '3',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.104,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '6',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.107,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '5',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.107,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '7',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.109,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '8',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.109,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '9',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.112,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '10',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.112,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '12',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.114,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '11',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.114,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '13',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.114,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '15',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.117,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '14',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.117,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '16',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.117,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '17',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.119,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '19',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.119,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '18',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.119,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '20',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.122,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '22',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.122,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '21',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.122,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '24',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.124,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23875473,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '23',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.124,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23875473,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '26',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.127,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '25',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.127,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '28',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.129,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23025455,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '27',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.129,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23025455,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '30',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.132,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '29',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.132,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '31',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.134,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 22229577,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '32',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.137,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '33',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.099,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 29136882,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '34',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.102,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '36',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.104,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '35',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.104,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '38',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.107,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '37',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.107,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '39',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.109,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '40',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.109,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '41',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.112,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '42',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.112,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '44',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.114,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '43',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.114,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '46',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.117,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '45',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.117,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '47',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.119,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '48',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.122,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '49',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.146,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 20513982,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '50',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.149,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '52',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.151,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19870635,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '51',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.151,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19870635,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '54',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.154,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '53',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.154,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '56',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.156,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19264439,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '55',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.156,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19264439,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '58',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.159,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '57',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.159,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '60',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.161,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18692479,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '59',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.161,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18692479,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '62',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.164,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '61',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.164,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '63',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.166,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18152118,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '64',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð°Ñ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.169,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '65',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.099,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 29136882,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '66',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.102,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '68',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.104,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '67',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.104,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '70',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.107,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '69',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.107,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '71',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.109,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '72',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.109,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '73',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.112,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '74',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.112,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '76',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.114,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '75',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.114,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '78',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.117,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '77',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.117,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '79',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.119,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '80',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.122,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '81',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.146,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 20513982,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '82',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.149,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '84',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.151,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19870635,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '83',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.151,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19870635,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '86',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.154,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '85',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.154,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '88',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.156,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19264439,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '87',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.156,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19264439,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '90',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.159,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '89',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.159,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '92',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.161,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18692479,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '91',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.161,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18692479,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '94',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.164,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '93',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.164,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '95',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.166,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18152118,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '96',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð°Ð¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ñ‹',
        rate: 0.169,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '97',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.109,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '98',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.112,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '99',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.114,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '100',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.117,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '101',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.119,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '102',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.122,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '103',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.124,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23875473,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '104',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.127,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '105',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.156,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 19264439,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '106',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.159,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '107',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.161,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18692479,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '108',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.164,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '109',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.166,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 18152118,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '110',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.169,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '111',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.171,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 17640959,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '112',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'Ð”Ð¾Ð¼ Ñ Ð·ÐµÐ¼ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð¼',
        rate: 0.174,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '113',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ð´Ð¾Ð¼',
        rate: 0.127,
        minInitialPayment: 0.25,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 23875473,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '114',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð˜Ð¿Ð¾Ñ‚ÐµÐºÐ° 6,5%, ÑÑ‚Ñ€Ð¾ÑÑ‰Ð°ÑÑÑ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.077,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'GOS_HELP_65',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '115',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð˜Ð¿Ð¾Ñ‚ÐµÐºÐ° Ð´Ð»Ñ Ð³Ñ€Ð°Ð¶Ð´Ð°Ð½ Ñ Ð´ÐµÑ‚ÑŒÐ¼Ð¸, ÑÑ‚Ñ€Ð¾ÑÑ‰Ð°ÑÑÑ ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð°',
        rate: 0.057,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '116',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.099,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 29136882,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '117',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.102,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '119',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.104,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '118',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.104,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 27927459,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '121',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.107,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '120',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.107,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '122',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.109,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '123',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.109,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 26804044,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '124',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.112,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '125',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.112,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '127',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.114,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '126',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.114,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '128',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.114,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 25758799,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '130',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.117,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '129',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.117,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '131',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.117,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '132',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.119,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '134',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.119,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '133',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.119,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 24784706,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '135',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.122,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'LIFE_HEALTH_INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '137',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.122,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '136',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.122,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '139',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.124,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23875473,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '138',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.124,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23875473,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '141',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.127,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '140',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.127,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '143',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.129,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23025455,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '142',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.129,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 23025455,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '145',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.132,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '144',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.132,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '146',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.134,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 22229577,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '147',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÐšÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ð° Ð² Ð½Ð¾Ð²Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ',
        rate: 0.137,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '148',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.104,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '149',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.107,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '151',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.109,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '150',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.109,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '153',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.112,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '152',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.112,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '154',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.114,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '155',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.114,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '156',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.117,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '157',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.117,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '159',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.119,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '158',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.119,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '161',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.122,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '160',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.122,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '162',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.124,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '163',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.127,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '164',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.151,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '165',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.154,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '167',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.156,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '166',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.156,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '169',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.159,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - Ð£Ð»ÑŒÑ‚Ñ€Ð°',
              rateDiscount: 0.015,
              priceFromAmount: 0.04
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '168',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.159,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '171',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.161,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '170',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.161,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '173',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.164,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐœÐµÐ´Ð¸Ð°',
              rateDiscount: 0.01,
              priceFromAmount: 0.025
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '172',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.164,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '175',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.166,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '174',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.166,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '177',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.169,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'BUY_RATE_DISCOUNT',
            value: {
              programName: 'ÐÐ°Ð·Ð½Ð°Ñ‡ÑŒ ÑÐ²Ð¾ÑŽ ÑÑ‚Ð°Ð²ÐºÑƒ - ÐžÐ¿Ñ‚Ð¸Ð¼Ð°',
              rateDiscount: 0.005,
              priceFromAmount: 0.01
            }
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '176',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.169,
        minInitialPayment: 0.200001,
        maxInitialPayment: 0.9999,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '178',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.171,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 2999999,
        maxAmount: 4000000,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-delta',
        offerId: '179',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° (Ð´Ð¾Ð»Ñ) Ð² ÐºÐ²Ð°Ñ€Ñ‚Ð¸Ñ€Ðµ ',
        rate: 0.174,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.2,
        maxPayment: 256652,
        preCalculatedMonthlyPayment: 0,
        minAmount: 300000,
        maxAmount: 3999999,
        minTerm: 36,
        maxTerm: 396,
        requirements: [
          {
            key: 'INSURANCE',
            value: false
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'ROOM'
          }
        ],
        features: [],
        expireAt: '2023-04-05T05:55:31.099'
      },
      {
        bankId: 'bank-domrf',
        offerId: '765fb3d3-2bc8-4394-a73b-d900d54d582b',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.064,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '7e661c3f-b6ad-44ea-be72-1f8d1f00e27b',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.069,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'd13bd705-cdef-4cb9-9995-b2fb2581a8bd',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.065,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '661f1690-ad61-47e8-92ae-957a30bb20c6',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.07,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '4b1f4114-46a6-44ce-bfb3-2a5e7d6d9844',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.072,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'ce96c53c-a037-47aa-af61-cca30d295faa',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.077,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '10bf5473-2c2e-4afc-b23b-1d730009b109',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.073,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'ab222b50-1153-4a2f-b9fe-911a4626b3e6',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.078,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '1e979a40-9120-4376-a8c5-669e6568e703',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.064,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'e4704db9-d9a6-42e8-ba43-563ae8a75cf0',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.069,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '713e77a5-6c54-41f6-a894-22188d330142',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.065,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '2fbe32a6-f9ac-4fdb-8c43-507b24e637e6',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.07,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'ebee1ce5-e223-412f-b872-35f159ec21a4',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.072,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'f746b064-a3f4-4ade-8485-c7f63eef395e',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.077,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'd2ce7e78-3670-4a0f-8636-8f024331d454',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.073,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'e332918e-2757-4a08-9ade-353e2e099b4b',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.078,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '09e0a332-fb6a-4eb9-a414-90e528fab4cf',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.064,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'b9c51548-84e7-40ee-bffb-26a35dde93c7',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.069,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '0322b73a-8dc1-4021-a2d6-2d04bb1708e4',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.065,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'e8a6c1ed-ab95-4ff5-833d-f46e3c699f78',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.07,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'ef756c05-9a70-4ec5-866b-bcaf10727def',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.072,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '53b2db51-a6de-4280-8881-47ce66ce5775',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.077,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '2e895ba5-46c3-4ef3-8276-ce1eefe0ce46',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.073,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '5360914b-36bd-4d49-b555-efe2135f5077',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð›ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.078,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '31e3c208-0dd4-42ec-86c7-4e0ae213d407',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.054,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '49aac9bf-eb9f-438d-a773-a244c7693256',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.059,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '0c8874b9-3aef-464b-a73e-a7528aef334d',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.055,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '5bb2df39-442f-4489-9c27-1dfb9ee9a934',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '0707a8e9-6b35-4850-9ba3-b462e88b1009',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.054,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '001b7d4d-ef70-4f70-a002-44b234b08835',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.059,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'e220c1c5-d1ad-4a8d-af43-4138f888eacf',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.055,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '154eca7b-dd8b-42a6-a34b-2fcc6ca2ea01',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '2ce496b2-4b6e-4c2b-a7da-dd99e0834006',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.054,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '186b41a5-3f74-436f-be93-f7b02cc13fd5',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.059,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '3a7439dc-fc4a-4627-982c-b27cfdfa5b84',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.055,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '85d26b07-3a90-4934-bec1-639530c32bb6',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'f9349d13-c381-4643-8d2d-eae37330e8f9',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.054,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '64e91c84-9a26-4622-aabc-58f42602ea0a',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.059,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'ed38c5d4-0823-4c27-bd7d-b630a7f30467',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.055,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '6302d1ba-8000-441e-9b93-5970f81db20e',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '685d3df4-4806-4a11-8ed8-471736ac9c28',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.054,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'fff7d0e8-6169-487a-bf0e-45f0ef34e0e2',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.059,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '3dd60b2b-a2ad-4c69-bf55-2e8f2a845f83',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.055,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'e1fc53b8-fc93-4be6-a465-916c0237faca',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'd7bc5acc-dbae-4904-8018-205efe37123d',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.054,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '425b3662-dec6-4312-8ecd-f2b9adeedbde',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.059,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '7e513acc-f58a-41dd-ba98-097b2277fe36',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.055,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '16a1ef75-adc7-420b-be95-e580e9e83ba4',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð¡ÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '68145ea7-371c-4337-9fd9-fd7c550ca72c',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.11,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '4d7e740e-8409-442c-97c7-7c6470b5f2de',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.115,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '0d75efd5-71e5-40f1-b807-4ad8c88e329e',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.111,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: 'cbafe3f3-5780-421b-9306-049e8cd524a5',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.116,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '4a161dfd-25e2-4cbb-983d-92849cb4a2fe',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.125,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '780eade0-ff1e-43b5-aa9b-f2fa0d58ad9b',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.13,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: '0.001'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '5085a3bc-d44e-45ed-ba49-acee0b343dc7',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.126,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'PFR_DISCOUNT',
            value: '0.005'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-domrf',
        offerId: '612f7d58-b5a2-401a-917d-d9cf7470a2c1',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð˜Ð–Ð¡ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.131,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 10000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.129'
      },
      {
        bankId: 'bank-gpb',
        offerId: '86d526c6-de59-4b2c-ac3a-6989567b3806',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.128,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 30572106,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'e5a0d040-49cf-4455-ab11-b35206f2e970',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.138,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 28520013,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '2621b2d9-70d6-45d4-bd11-61da57be3359',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.133,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 29513776,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '0247efb9-36e5-4705-934e-b018eba7790c',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.143,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 27585667,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '4b2e59fa-83e0-4df4-9b2a-4172df2ad7ff',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 32658337,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'd8507b66-e65c-4258-83d8-40270599cdd8',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.129,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 30355010,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '3e761ffd-00dc-485c-9367-9c1745f972e6',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.124,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '307db177-0ae5-427d-ab25-5dc2f286d67c',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_040100',
        rate: 0.134,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 29310030,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'cc65459b-7ea7-4f46-8ac8-c90e13412720',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.076,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '1b24ab12-6c70-4331-b43c-c245b91c6e90',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.086,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '6391938e-12b8-4da6-b721-79b76648cd50',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.125,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 31240438,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '865ede17-f952-4b68-8a73-e8c9d1fcc249',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.135,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 29108823,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '7df5a854-3861-4bec-8eda-20f710571cd1',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.13,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 30140675,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '7af80449-1022-40c9-b4b1-f685411d6630',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.14,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 28139417,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'ac2b7102-41dd-449a-972d-f89467a2652e',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.116,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 33410815,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '1b3e1442-cf79-4115-9212-7c4e3e0d5057',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.126,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 31014772,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '9246adf2-3eb1-4f44-b0ea-4ec77cff31b8',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.121,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 32173179,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'eba3ccda-9786-4477-a7f7-37719aedbf97',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_040300',
        rate: 0.131,
        minInitialPayment: 0.1,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 29929054,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '4cc5dc54-478e-497f-8efa-deb4915e77d7',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'b98f25a8-422a-4e15-ae50-fc78de212052',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '7f7b35d9-ffb4-4d6d-a703-5dd45b4ff0e1',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '88bbdc21-017d-4f1e-bee3-847dd023df8e',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '3bf5adf6-1fdd-429d-b6c2-f054e3623032',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '339fff30-c8bd-40b5-8ab4-6449ca8997db',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'dc2ee17f-0780-4330-b7e8-962f318df1bb',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '0c9c103c-1d29-4a8f-a917-802ea6e4edb0',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_043100',
        rate: 0.124,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 5000000,
        maxAmount: 31469060,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: '14f96141-6d35-4ae9-8239-7c3eb953ed50',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_044300',
        rate: 0.055,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'INSURANCE',
            value: true
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-gpb',
        offerId: 'f411c208-6fb3-4c0c-962c-4f16464ccf28',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'GPB_PROGRAM_044300',
        rate: 0.06,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 333416,
        minAmount: 100000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.706'
      },
      {
        bankId: 'bank-open',
        offerId: 'f804f033-37fe-4bea-a8a1-7118ec43b16c',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.066,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '4c364450-d219-4561-9b69-13caed2f049a',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.066,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: 'ccd29a4b-2c90-48ed-81cb-5a84fa9dcdcb',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.063,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '5cd54b7c-9bf4-4eca-a8b0-41469c4ec36a',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.063,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '2d9e6a5b-8e51-490f-b2a1-59df5a4cffeb',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.056,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '49570fef-7697-420e-a914-3a4aef816e9f',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.056,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.85,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '0739005b-fe34-4be1-9f95-fafac7e34c09',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.053,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: 'fd2c7f75-f299-4b55-8c5e-c8a1aec75ec6',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.053,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '5466eaa7-04ba-4246-83ee-ef57ab0f3771',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.1109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 20000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '05c8dce1-f462-4592-878f-347bc86d0f9e',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.1109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 20000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '435be3a4-3969-44dd-bde1-249238aec56b',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.1029,
        minInitialPayment: 0.5,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 20000000,
        maxAmount: 29667452,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: 'becef0c6-64c9-424f-82dd-795134c72fd4',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.1029,
        minInitialPayment: 0.5,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 20000000,
        maxAmount: 29667452,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '20d056ae-1d10-45aa-9549-b52372b0221c',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.1109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 20000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: 'e18a8eae-8643-4193-8bed-bb9b58ccf3e4',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.1109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 20000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '06e70ac8-c7c0-4a24-9e42-23836666c0d8',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.1029,
        minInitialPayment: 0.5,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 20000000,
        maxAmount: 29667452,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: 'c91f6013-517c-4be2-8e9a-0d71b40c014d',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.1029,
        minInitialPayment: 0.5,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 20000000,
        maxAmount: 29667452,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'SHOW_MIN_AMOUNT_LABEL',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: 'eec9f701-e591-4d51-bc7b-ab10e0787ad0',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.1159,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '9e8ab522-07a3-451b-9a86-150bad3cd4fa',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.1159,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: '5d7b391a-4669-4432-ac35-c5c07ab76301',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.1159,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-open',
        offerId: 'c71f8f28-0efa-41eb-b381-f72798623dd9',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.1159,
        minInitialPayment: 0.3,
        maxInitialPayment: 0.8,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 15000000,
        minTerm: 36,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '9999-12-31T05:54:54.305'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '7a823666-d2a8-4046-91bc-bd5ef3245c7d',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.067,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '23aec1fc-e4d1-4b7a-ba7d-6c7fb9e9b8a8',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.07,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'cdfa76ea-d78f-4d9a-a15c-90d4d233fda0',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.077,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '49affc7a-0a2d-442e-adc3-7e0d2d319912',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.08,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '10a4e801-150d-4493-9360-fd3accebb64f',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð¸Ð¶Ñ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.063,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'ce9e320f-906e-458d-a9ae-4f4fddfb13d0',
        type: 'MORTGAGE',
        product: 'BUILD',
        creditProgram: 'Ð¸Ð¶Ñ Ñ…Ð¾Ð·ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼',
        rate: 0.073,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [
          'GOS_HELP_IGS'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '124c5bd0-b3fc-424b-8101-01dc9c480dcb',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.067,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '987e32d2-dd4a-4e2c-a321-761489771f88',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.07,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'eb0669d2-702f-41d0-8af5-1f2ef212b629',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.077,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '4675dba7-ef54-418a-bdf8-a4b1aad42f7c',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'Ð»ÑŒÐ³Ð¾Ñ‚Ð½Ð°Ñ',
        rate: 0.08,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_COVID'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'af4e645e-bea6-4bd5-b89a-e0dbed151aaf',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.057,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '645425ab-9a10-49be-9873-96d060746a2b',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'bfa097d8-1087-4f22-a4d3-69261cec3b72',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.057,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '13b767f5-5492-4fa8-8349-e6fc26579bbc',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '3b9a5bee-598e-4bb0-9fff-cd391b184e94',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.057,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'e41e079f-8c57-411d-9f89-34fc3910ec86',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'cc4b7237-6da3-4a4f-8199-a082e7f0cba0',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.057,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '8565f493-1a10-47c4-a4ab-a545a2185714',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: 'ÑÐµÐ¼ÐµÐ¹Ð½Ð°Ñ',
        rate: 0.06,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 6000000,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [
          'GOS_HELP_FAMILY'
        ],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'f9b0d3d2-de01-4abe-9333-f905c117d808',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 28232441,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'a47f7355-ae2b-4af3-806c-37f7ba459579',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.112,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27570263,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '314479d7-f0c2-4188-aa91-858054340061',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26126689,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '25338ddb-6c58-4941-a8f2-18cc70a5631a',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.122,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25548322,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '68f3e6d0-758c-4df2-8626-8e0ce63de2ed',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.114,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27143739,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'da224205-12fa-4e5f-bd0c-1db1e0f27c72',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.117,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26525310,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'fb0b17e6-7b23-4e92-9e3a-520bcfec771f',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.124,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25175267,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '5288184d-2e63-48ed-a262-efdc67cbc7a0',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.127,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 24633627,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'a938ccdc-26cf-4098-ae9e-9ef605f1a897',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 28232441,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'e3575d8a-67c8-477b-bf33-434a890bb816',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.112,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27570263,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '86b58000-bcfe-4d0d-8f8e-eb8750fdc2e2',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26126689,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'f8e28ffb-e7cc-4551-b6a7-a9f530bf5a31',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.122,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25548322,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '2b99e886-28b4-487f-a3cd-88d5ec7e2e4e',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 28232441,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '667e4111-0f11-4aeb-9df0-d02ffeba5270',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.112,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27570263,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '36afe271-8c9b-4951-a27d-d460e72c7b37',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26126689,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'eed45670-a0e7-4221-932e-db930da3efc8',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.122,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25548322,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'COTTAGE'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '929bf438-528c-4d51-b6e3-c234d8916f89',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.114,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27143739,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'eed983f2-9f7a-4973-9c78-36af4c3cd946',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.117,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26525310,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'c02a41d1-8692-40d1-a62f-02e7eb7ffff6',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.124,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25175267,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '8d910a89-aad9-4998-9898-35b78ba50d34',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.127,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 24633627,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'b5fca0a3-cd40-4376-b51a-2b502a6dcd91',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 28232441,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '2c1deb36-7fd7-4336-a54b-6e018e307f41',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.112,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27570263,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '108e94d9-6469-4445-9190-b83657a93a59',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26126689,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '08463920-0151-42a8-a311-4b770156f0b7',
        type: 'MORTGAGE',
        product: 'USED',
        creditProgram: '',
        rate: 0.122,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25548322,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '033444f8-9f23-4920-8f2e-ac5371d7d3a0',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.114,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27143739,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'add253eb-1876-4539-a33d-89e4d77b5ae0',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.117,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26525310,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '9eb6da10-8971-46c6-9719-efa11fdc8fa3',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.124,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25175267,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'ff9ef9e8-c0a7-4f8f-a8c4-05e158b29b6e',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.127,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 24633627,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '616ccde6-108c-47af-b94c-7044c9f402ca',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 28232441,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '302a1bbd-297a-440c-bf47-ae7a30a756fa',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.112,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27570263,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '375ab889-4b9a-42af-83ee-36e967a4c41b',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26126689,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '55d5d991-438f-4bba-9451-041691b9ce01',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.122,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25548322,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'APARTMENTS'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '72399671-18dc-40e3-a264-2cf839888ebf',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.114,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27143739,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'a4eac361-45b4-4ec6-aaba-db4be5308241',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.117,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26525310,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'a61f5822-9813-4b8b-92d1-aa763fd51609',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.124,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25175267,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '6b485eef-977f-45c8-a9e7-99d429cbd2e9',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.127,
        minInitialPayment: 0.15,
        maxInitialPayment: 0.1999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 24633627,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '468c53ac-4d42-4c19-983b-5b26cba36545',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 28232441,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'e272dea1-4cb0-455d-a648-007349e319d3',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.112,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27570263,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '7f36b78c-7640-4a87-8014-80ce96e928ca',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26126689,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '8b51b98f-2eb8-4950-af5b-270e39c51445',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.122,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25548322,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'FLAT'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '4cb150c4-b8aa-45fb-b6e5-d05ea1809051',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.109,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 28232441,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '02f5e920-41e9-4f02-a28f-c080eb98754c',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.112,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 27570263,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'INSURANCE',
            value: true
          },
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: 'ba313012-d140-4a2e-89db-38b0232e6ef9',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.119,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 26126689,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          },
          {
            key: 'ONLINE_REG_DISCOUNT',
            value: 0.003
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      },
      {
        bankId: 'bank-vtb-new',
        offerId: '1ca735a8-a0cb-47a3-8f26-e0aa51b7cf29',
        type: 'MORTGAGE',
        product: 'NEW',
        creditProgram: '',
        rate: 0.122,
        minInitialPayment: 0.2,
        maxInitialPayment: 0.9999,
        maxPayment: 266733,
        minAmount: 500000,
        maxAmount: 25548322,
        minTerm: 12,
        maxTerm: 360,
        requirements: [
          {
            key: 'PROPERTY_TYPE',
            value: 'TOWNHOUSE'
          }
        ],
        features: [],
        expireAt: '2023-01-12T05:54:54.316'
      }
    ],
    availableBanks: {
      MORTGAGE: [
        'bank-alfa',
        'bank-delta',
        'bank-domrf',
        'bank-gpb',
        'bank-open',
        'bank-vtb-new'
      ],
      PERSONAL_LOAN: [],
      MAP: []
    },
    availableDiscountRequirements: [
      'PFR_DISCOUNT',
      'ONLINE_REG_DISCOUNT'
    ]
  },
  anketaStatus: {
    status: 'DEFAULT',
    pullingFromServerFinished: true,
    fresh: true,
    resubmitInProgress: false,
    allOffersArrived: true,
    banksRequested: [
      'bank-gpb',
      'bank-sovcom',
      'bank-delta',
      'bank-vtb-new',
      'bank-open',
      'bank-uralsib',
      'bank-ubrir',
      'bank-domrf',
      'bank-alfa'
    ],
    rejectedBanks: [
      'bank-ubrir',
      'bank-uralsib'
    ],
    noDecisionBanks: [
      'bank-sovcom'
    ],
    errorBanks: []
  },
  subscriptionStatus: true,
  systemState: {
    isMobileApp: false,
    deviceType: 'mobile'
  },
  wizard: {
    wizardShown: {
      shown: false,
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
  },
  userOffersInfoService: {
    pending: {
      sentOffers: {},
      sentPersonalLoanOffers: {},
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
  },
  experiments: {
    items: [
      {
        name: 'banner-helper',
        group: 'B'
      },
      {
        name: 'experiment-per-bank-listing',
        group: 'B'
      }
    ]
  },
  developers: {
    developers: {},
    buildings: {},
    offers: []
  },
  banks: {
    info: {
      'bank-sberbank': {
        id: 'bank-sberbank',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/sber.svg',
        name: 'Ð¡Ð±ÐµÑ€Ð±Ð°Ð½Ðº',
        enabled: false,
        requireSpouseInfo: false
      },
      'bank-vtb': {
        id: 'bank-vtb',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/vtb.svg',
        name: 'Ð’Ð¢Ð‘',
        enabled: false,
        requireSpouseInfo: false
      },
      'bank-vtb-new': {
        id: 'bank-vtb-new',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/vtb.svg',
        name: 'Ð’Ð¢Ð‘',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-delta': {
        id: 'bank-delta',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/delta.svg',
        name: 'Ð Ð¾ÑÐ±Ð°Ð½Ðº',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-psb': {
        id: 'bank-psb',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/psb.svg',
        name: 'ÐŸÐ¡Ð‘',
        enabled: false,
        requireSpouseInfo: false
      },
      'bank-gpb': {
        id: 'bank-gpb',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/gpb.svg',
        name: 'Ð“Ð°Ð·Ð¿Ñ€Ð¾Ð¼Ð±Ð°Ð½Ðº',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-sovcom': {
        id: 'bank-sovcom',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/sovcom.svg',
        name: 'Ð¡Ð¾Ð²ÐºÐ¾Ð¼Ð±Ð°Ð½Ðº',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-raif': {
        id: 'bank-raif',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/raif.svg',
        name: 'Ð Ð°Ð¹Ñ„Ñ„Ð°Ð¹Ð·ÐµÐ½Ð±Ð°Ð½Ðº',
        enabled: false,
        requireSpouseInfo: false
      },
      'bank-rshb': {
        id: 'bank-rshb',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/rshb.svg',
        name: 'Ð Ð¾ÑÑÐµÐ»ÑŒÑ…Ð¾Ð·Ð±Ð°Ð½Ðº',
        enabled: false,
        requireSpouseInfo: false
      },
      'bank-alfa': {
        id: 'bank-alfa',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/alfa.svg',
        name: 'ÐÐ»ÑŒÑ„Ð°-Ð‘Ð°Ð½Ðº',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-bgf': {
        id: 'bank-bgf',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/bgf.svg',
        name: 'Ð‘Ð–Ð¤',
        enabled: false,
        requireSpouseInfo: false
      },
      'bank-ubrir': {
        id: 'bank-ubrir',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/ubrir.svg',
        name: 'Ð£Ð‘Ð Ð¸Ð ',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-open': {
        id: 'bank-open',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/open.svg',
        name: 'ÐžÑ‚ÐºÑ€Ñ‹Ñ‚Ð¸Ðµ',
        enabled: true,
        requireSpouseInfo: true
      },
      'bank-uralsib': {
        id: 'bank-uralsib',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/uralsib.svg',
        name: 'Ð£Ñ€Ð°Ð»ÑÐ¸Ð±',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-domrf': {
        id: 'bank-domrf',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/domrf.svg',
        name: 'Ð‘Ð°Ð½Ðº Ð”ÐžÐœ.Ð Ð¤',
        enabled: true,
        requireSpouseInfo: false
      },
      'bank-tinkoff': {
        id: 'bank-tinkoff',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/tinkoff.svg',
        name: 'Ð¢Ð¸Ð½ÑŒÐºÐ¾Ñ„Ñ„ Ð‘Ð°Ð½Ðº',
        enabled: false,
        requireSpouseInfo: false
      },
      'bank-unicredit': {
        id: 'bank-unicredit',
        logo: 'https://cdn.cian.site/frontend/finance-assets/banks/logos/unicredit.svg',
        name: 'Ð®Ð½Ð¸ÐšÑ€ÐµÐ´Ð¸Ñ‚ Ð‘Ð°Ð½Ðº',
        enabled: false,
        requireSpouseInfo: false
      }
    }
  },
  bannerHelper: {
    shownForSessions: [
      'fincian_bfa33b11-069f-4337-9a15-a28ab2f622af',
      'fincian_96414e94-95a3-4813-a92e-949681925740',
      'fincian_bcc0fa99-0258-4aa2-9e82-389c08ec3840'
    ],
    _persist: {
      version: -1,
      rehydrated: true
    }
  },
  listing: {},
  vote: {
    shownAt: -1,
    _persist: {
      version: -1,
      rehydrated: true
    }
  },
  banners: {
    reminderBanner: {
      shownAtEpoch: 0,
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
  }
}