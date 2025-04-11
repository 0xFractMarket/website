import Property1 from "../../assets/images/properties/LT01/01.jpeg";
import Property2 from "../../assets/images/properties/LT02/03.jpg";
import Property3 from "../../assets/images/properties/LT03/01.jpg";
import Property4 from "../../assets/images/property/4.jpg";
import Property5 from "../../assets/images/property/5.jpg";
import Property6 from "../../assets/images/property/6.jpg";

import SubProperty1 from "../../assets/images/property/single/1.jpg";
import SubProperty2 from "../../assets/images/property/single/2.jpg";
import SubProperty3 from "../../assets/images/property/single/3.jpg";
import SubProperty4 from "../../assets/images/property/single/4.jpg";
import SubProperty5 from "../../assets/images/property/single/5.jpg";

import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";
import client7 from "../../assets/images/client/07.jpg";
import client8 from "../../assets/images/client/08.jpg";

import cate1 from "../../assets/images/property/residential.jpg";
import cate2 from "../../assets/images/property/land.jpg";
import cate3 from "../../assets/images/property/commercial.jpg";
import cate5 from "../../assets/images/property/industrial.jpg";

import about1 from '../../assets/images/rent.png'
import about2 from '../../assets/images/buy.png'
import about3 from '../../assets/images/sell.png'

import agency1 from '../../assets/images/agency/1.png'
import agency2 from '../../assets/images/agency/2.png'
import agency3 from '../../assets/images/agency/3.png'
import agency4 from '../../assets/images/agency/4.png'
import agency5 from '../../assets/images/agency/5.png'
import agency6 from '../../assets/images/agency/6.png'
import agency7 from '../../assets/images/agency/7.png'
import agency8 from '../../assets/images/agency/8.png'
import agency9 from '../../assets/images/agency/9.png'
import { FiBriefcase, FiHome, FiKey } from "react-icons/fi";
import { CgTrees } from "react-icons/cg";
import { BiShieldAlt2 } from "react-icons/bi";
import { GoRocket } from "react-icons/go";


// Real Real Estate LT01 Assets
import lt0101 from "../../assets/images/properties/LT01/01.jpeg";
import lt0102 from "../../assets/images/properties/LT01/02.jpeg";
import lt0103 from "../../assets/images/properties/LT01/03.jpg";
import lt0104 from "../../assets/images/properties/LT01/04.jpg";
import lt0105 from "../../assets/images/properties/LT01/05.jpg";
import lt0106 from "../../assets/images/properties/LT01/06.jpg";
import lt0107 from "../../assets/images/properties/LT01/07.jpg";

// Real Real Estate LT02 Assets
import lt0201 from "../../assets/images/properties/LT02/01.png";
import lt0202 from "../../assets/images/properties/LT02/02.jpg";
import lt0203 from "../../assets/images/properties/LT02/03.jpg";
import lt0204 from "../../assets/images/properties/LT02/04.jpg";
import lt0205 from "../../assets/images/properties/LT02/05.jpg";
import lt0206 from "../../assets/images/properties/LT02/06.jpg";

// Real Real Estate LT03 Assets
import lt0301 from "../../assets/images/properties/LT03/01.jpg";
import lt0302 from "../../assets/images/properties/LT03/02.jpg";
import lt0303 from "../../assets/images/properties/LT03/03.jpg";
import lt0304 from "../../assets/images/properties/LT03/04.jpg";
import lt0305 from "../../assets/images/properties/LT03/05.jpg";
import lt0306 from "../../assets/images/properties/LT03/06.jpg";
import lt0307 from "../../assets/images/properties/LT03/07.jpg";
import lt0308 from "../../assets/images/properties/LT03/08.mp4";

// Real Real Estate LT04 Assets
import lt0401 from "../../assets/images/properties/LT04/01.jpg";
import lt0402 from "../../assets/images/properties/LT04/02.jpg";
import lt0403 from "../../assets/images/properties/LT04/03.jpg";
import lt0404 from "../../assets/images/properties/LT04/04.jpg";
import lt0405 from "../../assets/images/properties/LT04/05.jpg";
import lt0406 from "../../assets/images/properties/LT04/06.jpg";
import lt0407 from "../../assets/images/properties/LT04/07.jpg";
import lt0408 from "../../assets/images/properties/LT04/08.jpg";
import lt0409 from "../../assets/images/properties/LT04/09.mp4";

export const properties = [
    {
        id: 1,
        enabled: true,
        agentId: 1,
        image: lt0102,
        name: 'Samara Beach, Costa Rica 🇨🇷🌴',
        square: 712,
        type: "Terreno",
        price: '30,000',
        rating: 5.0,
        description: "",
        googleMapsLink: "https://www.google.com/maps/place/9%C2%B058'36.5%22N+85%C2%B030'56.0%22W/@9.9768076,-85.5181389,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.9768076!4d-85.515564?hl=en&entry=ttu",
        address: "Maquenco Samara",
        country: "Costa Rica",
        state: "Guanacaste",
        phone: "+50683080167",
        detail: [lt0105, lt0102, lt0103, lt0104, lt0101, lt0106, lt0107],
        terrainFeatures: {
          canItBeDivided: "",
          terrainType: "",
          elevation: "",
          soilQuality: "",
          naturalResources: ["", ""],
          topography: "",
          accessibility: "Camino de lastre",
          proximityToAmenities: "",
          environmentalConcerns: ""
        },
        legalConsiderations: {
          zoningRegulations: "",
          landUseRestrictions: "Todo uso de suelo",
          easements: "Plano se tiene que sacar al haber pagado la hipoteca una vez recibido el dinero",
          propertyTaxStatus: "Tiene hipoteca",
          titleIssues: "Título en mano",
          surveyAvailable: true
        },
        utilityInformation: {
          waterSource: "Agua de Poso",
          waterSourceComment: "Contiene agua de poso comunal no inscrito en Asada aun, ya esta instalado el tubo con agua, no paga recibo de agua",
          sewerSystem: "",
          electricitySource: "Luz Disponible",
          electricitySourceComment: "Cuenta con el medidor ya instalado",
          gasAvailability: "",
          internetConnectivity: ""
        },
        developmentPotential: {
          futureLandValue: "",
          potentialLandUse: "",
          infrastructurePlans: "",
          surroundingDevelopment: "",
          marketTrends: ""
        }
      },
      {
        id: 2,
        enabled: false,
        agentId: 1,
        image: lt0203,
        name: 'Bagaces, Costa Rica 🇨🇷⛰️',
        square: 1000,
        type: "Terreno",
        price: '20,000',
        rating: 4,
        description: "",
        googleMapsLink: "https://www.google.com/maps/place/10%C2%B032'13.9%22N+85%C2%B015'54.6%22W/@10.5372028,-85.2677421,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.5372028!4d-85.2651672?hl=en&entry=ttu",
        address: "Bagaces Centro",
        country: "Costa RIca",
        state: "Guanacaste",
        phone: "+50683080167",
        detail: [lt0205, lt0202, lt0203, lt0204, lt0201, lt0206],
        terrainFeatures: {
          canItBeDivided: "",
          terrainType: "",
          elevation: "",
          soilQuality: "",
          naturalResources: ["", ""],
          topography: "",
          accessibility: "Camino asfaltado",
          proximityToAmenities: "",
          environmentalConcerns: ""
        },
        legalConsiderations: {
          zoningRegulations: "",
          landUseRestrictions: "El uso de suelo se entrega al mismo tiempo que el plano",
          easements: "El plano tiene que ser tramitado",
          propertyTaxStatus: "",
          titleIssues: "Título en mano",
          surveyAvailable: true
        },
        utilityInformation: {
          waterSource: "Agua Disponible",
          waterSourceComment: "La quinta ya tiene el agua disponible, el permiso se tramita una vez inscrito el lote",
          sewerSystem: "",
          electricitySource: "Luz Disponible",
          electricitySourceComment: "La quinta ya tiene la luz disponible, el permiso se tramita una vez inscrito el lote",
          gasAvailability: "",
          internetConnectivity: ""
        },
        developmentPotential: {
          futureLandValue: "",
          potentialLandUse: "",
          infrastructurePlans: "",
          surroundingDevelopment: "",
          marketTrends: ""
        }
      },
      {
        id: 3,
        enabled: false,
        agentId: 1,
        image: lt0301,
        name: 'Bagaces, Guanacaste Costa Rica 🇨🇷⛰️',
        square: 5000,
        type: "Terreno",
        price: '46,000',
        rating: 4,
        description: "",
        googleMapsLink: "https://www.google.com/maps/place/10%C2%B031'40.7%22N+85%C2%B014'48.8%22W/@10.527966,-85.246893,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.527966!4d-85.246893?entry=ttu",
        address: "Bagaces",
        country: "Costa RIca",
        state: "Guanacaste",
        phone: "+50683080167",
        detail: [lt0301, lt0302, lt0303, lt0304, lt0305, lt0306, lt0307, lt0308],
        terrainFeatures: {
          canItBeDivided: "",
          terrainType: "",
          elevation: "",
          soilQuality: "",
          naturalResources: ["", ""],
          topography: "",
          accessibility: "Lastre, Asfaltado a 200mts",
          proximityToAmenities: "",
          environmentalConcerns: ""
        },
        legalConsiderations: {
          zoningRegulations: "",
          landUseRestrictions: "Todo uso de suelo",
          easements: "Lote tiene 60mts de calle publica",
          propertyTaxStatus: "",
          titleIssues: "Título en mano",
          surveyAvailable: true
        },
        utilityInformation: {
          waterSource: "Agua Disponible",
          waterSourceComment: "El acueducto esta instalado en la calle publica",
          sewerSystem: "",
          electricitySource: "Luz Disponible",
          electricitySourceComment: "La corriente pasa por el frente de la quinta",
          gasAvailability: "",
          internetConnectivity: ""
        },
        developmentPotential: {
          futureLandValue: "",
          potentialLandUse: "",
          infrastructurePlans: "",
          surroundingDevelopment: "",
          marketTrends: ""
        }
      },
      {
        id: 4,
        enabled: false,
        agentId: 1,
        image: lt0402,
        name: 'Lote en Bagaces 2643mts2, 2E Residencial MANANTIALES, 800mts del Pali, 15 min de Liberia, 20 min de Llanos de Cortes',
        square: 2600,
        type: "Terreno",
        price: '30,000',
        rating: 4,
        description: "",
        googleMapsLink: "https://www.google.com/maps/place/10%C2%B031'40.7%22N+85%C2%B014'48.8%22W/@10.527966,-85.246893,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.527966!4d-85.246893?entry=ttu",
        address: "Bagaces",
        country: "Costa RIca",
        state: "Guanacaste",
        phone: "+50683080167",
        detail: [lt0401, lt0402, lt0403, lt0404, lt0405, lt0406, lt0407, lt0408, lt0409],
        terrainFeatures: {
          canItBeDivided: "",
          terrainType: "",
          elevation: "",
          soilQuality: "",
          naturalResources: ["", ""],
          topography: "",
          accessibility: "Lastre, Asfaltado a 200mts",
          proximityToAmenities: "",
          environmentalConcerns: ""
        },
        legalConsiderations: {
          zoningRegulations: "",
          landUseRestrictions: "",
          easements: "",
          propertyTaxStatus: "",
          titleIssues: "Título en mano",
          surveyAvailable: true
        },
        utilityInformation: {
          waterSource: "Agua No Disponible",
          waterSourceComment: "",
          sewerSystem: "",
          electricitySource: "Luz No Disponible",
          electricitySourceComment: "",
          gasAvailability: "",
          internetConnectivity: ""
        },
        developmentPotential: {
          futureLandValue: "",
          potentialLandUse: "",
          infrastructurePlans: "",
          surroundingDevelopment: "",
          marketTrends: ""
        }
      }
];

export const featureData = [
    {
        icon:FiHome,
        title:'Evaluate Property',
        desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon:FiBriefcase,
        title:'Meeting with Agent',
        desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon:FiKey,
        title:'Close the Deal',
        desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
]
export const review = [
    {
        id: '1',
        profile: client1,
        name: 'Calvin Carlo',
        designation: "Manager",
        description: "Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000."
    },
    {
        id: '2',
        profile: client2,
        name: 'Christa Smith',
        designation: "Manager",
        description: 'I highly recommend Hously as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home.'
    }, {
        id: '3',
        profile: client3,
        name: 'Christa Smith',
        designation: "Manager",
        description: "My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!"
    }, {
        id: '4',
        profile: client4,
        name: 'Christa Smith',
        designation: "Manager",
        description: "Great experience all around! Easy to use and efficient."
    }
]
export const teamdata = [
    {
        image: client4,
        name: 'Jack John',
        title: 'Designer'
    },
    {
        image: client5,
        name: 'Krista John',
        title: 'Designer'
    },
    {
        image: client6,
        name: 'Roger Jackson',
        title: 'Designer'
    },
    {
        image: client7,
        name: 'Johnny English',
        title: 'Designer'
    },
]

export const counterData = [
    {
        target:'1548',
        title: 'Properties Sell'
    },
    {
        target:'25',
        title: 'Award Gained'
    },
    {
        target:'9',
        title: 'Years Experience'
    },
]
export const categoriesData = [
    {
        image:cate1,
        name: 'Residential',
        title: 'Coming Soon'
    },
    {
        image:cate2,
        name: 'Land',
        title: 'Coming Soon'
    },
    {
        image:cate3,
        name: 'Commercial',
        title: 'Coming Soon'
    },
    {
        image:cate5,
        name: 'Investment',
        title: 'Coming Soon'
    },
]
export const featureTwo = [
    {
        icon: 'mdi mdi-cards-heart',
        title: 'Comfortable',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-shield-sun',
        title: 'Extra Security',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-star',
        title: 'Luxury',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-currency-usd',
        title: 'Best Price',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-map-marker',
        title: 'Stratagic Location',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-chart-arc',
        title: 'Efficient',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
]

export const pricing = [
    {
     icon:CgTrees,
     title:"Basic",
     amount:"19",
     features:["Full Access", "Source Files","Free Appointments","Enhanced Security"]
    },
    {
    icon:BiShieldAlt2,
    title:"Premium",
    amount:"39",
    features:["Full Access", "Source Files","Free Appointments","Enhanced Security"]
    },
    {
    icon:GoRocket,
    title:"Business",
    amount:"99",
    features:["Full Access", "Source Files","Free Appointments","Enhanced Security"]
    }
]
export const accordionData = [
    {
        title: 'How can I invest in fractional real estate?',
        content: 'Simply visit our marketplace, choose a property, and purchase tokens representing its value'
    },
    {
        title: 'What rights do I have as a token holder?',
        content: 'Your tokens grant you proportional benefits, including rental income and voting power in DAO decisions'
    },
    {
        title: 'How do you ensure liquidity for my investment?',
        content: 'You can sell your tokens on the secondary market anytime or opt for the DAO buyback option'
    },
    {
        title: 'What happens if the property value increases?',
        content: 'If the property appreciates, your tokens gain value, allowing you to sell at a profit or earn higher rental returns'
    },
    {
        title: 'Is it safe to invest here?',
        content: 'Yes. We leverage blockchain technology to guarantee security, transparency, and full transaction traceability'
    }
]
export  const blogList = [
    {
        id:1,
        title: "Skills That You Can Learn In The Real Estate Market",
        date: "13th March, 2023",
        type: 'Industrial',
        image: Property1
    },
    {
        id:2,
        title: "Learn The Truth About Real Estate Industry",
        date: "5th May, 2023",
        type: 'Industrial',
        image: Property2
    },
    {
        id:3,
        title: "10 Quick Tips About Business Development",
        date: "19th June, 2023",
        type: 'Industrial',
        image: Property3
    },
    {
        id:4,
        title: "14 Common Misconceptions About Business Development",
        date: "20th June, 2023",
        type: 'Industrial',
        image: Property4
    },
    {
        id:5,
        title: "10 Things Your Competitors Can Teach You About Real Estate",
        date: "31st Aug, 2023",
        type: 'Industrial',
        image: Property5
    },
    {
        id:6,
        title: "Why We Love Real Estate",
        date: "1st Sep, 2023",
        type: 'Industrial',
        image: Property6
    }
]

export const aboutData = [
    {
        image:about1,
        title:'Fractionalized Properties',
        desc: "Own a fraction of a property through tokens backed by real assets"
    },
    {
        image:about2,
        title:'DAO as an Active Manager',
        desc:"Our DAO doesn’t just manage—it enhances property value through upgrades and rental strategies"
    },
    {
        image:about3,
        title:'Secondary Market',
        desc:"Buy and sell your tokens easily on our transparent marketplace"
    },
    {
        image:about1,
        title:'DAO Buyback Option',
        desc:"If you choose to sell, the DAO can buy back your tokens, ensuring a smooth exit"
    },
    {
        image:about2,
        title:'Smart Land Acquisition',
        desc:"Our strategy includes crowdfunding, direct purchases, and auctions to maximize property value"
    },
    {
        image:about3,
        title:'Security & Transparency',
        desc:"Every transaction is securely recorded, ensuring full traceability and trust"
    },
]

export const agentData = [
    {
        id:1,
        image:client4,
        name:'Jack John',
        position:'Property Broker'
    },
    {
        id:2,
        image:client5,
        name:'Krista John',
        position:'Property Broker'
    },
    {
        id:3,
        image:client6,
        name:'Roger Jackson',
        position:'Property Broker'
    },
    {
        id:4,
        image:client7,
        name:'Johnny English',
        position:'Property Broker'
    },
    {
        id:5,
        image:client8,
        name:'Clayton Dalke',
        position:'Property Broker'
    },
    {
        id:6,
        image:client1,
        name:'Christopher Myers',
        position:'Property Broker'
    },
    {
        id:7,
        image:client2,
        name:'Mary Petersen',
        position:'Property Broker'
    },
    {
        id:8,
        image:client3,
        name:'Amber Durden',
        position:'Property Broker'
    },
]

export const agencyData = [
    {
        id:1,
        image:agency1,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:2,
        image:agency2,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:3,
        image:agency3,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:4,
        image:agency4,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:5,
        image:agency5,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:6,
        image:agency6,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:7,
        image:agency7,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:8,
        image:agency8,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:9,
        image:agency9,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
]