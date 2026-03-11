'use client';

import ResearchHighlights from './ResearchHighlights';

const highlightItems = [
  {
    id: 1,
    title: 'Laser-Induced Graphene Microsupercapacitor Platform',
    image: '/SUPER.png',
    summary:
      'A laser direct-writing process enables the formation of porous laser-induced graphene (LIG) electrodes on flexible liquid-crystal-polymer (LCP) substrates through localized photothermal conversion. The rapid laser pyrolysis produces a three-dimensional graphene network with high electrical conductivity (~10²–10³ S m⁻¹) and large accessible surface area, providing an effective scaffold for electrochemical charge storage. Subsequent integration of bimetallic oxide nanostructures introduces additional pseudocapacitive redox reactions, significantly increasing the areal capacitance and power density of the microsupercapacitor electrodes. Vertically stacked microsupercapacitor arrays are then constructed using modular interconnection architectures, enabling compact energy-storage modules with enhanced energy density while maintaining mechanical flexibility. The resulting LIG-based microenergy storage platform demonstrates fast charge–discharge characteristics, high cycling stability (>10⁴ cycles), and scalable integration for wearable electronics and distributed IoT power systems.',
    paper_title:
      'Modular and vertically integrated micro-supercapacitor arrays based on laser-induced graphene and bimetallic oxide interfaces on liquid crystal polymer substrate',
    journal: 'Small Structures',
    year: '2026',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/sstr.202500426?utm_medium=article&utm_source=researchgate.net',
  },
  
  {
    id: 2,
    title: 'Flexible Bioelectronic Interface for Wearable Biosensing',
    image: '/tes 2.png',
    summary:
      'A miniaturized flexible bioelectronic interface designed for seamless integration with wearable electrochemical biosensors. The flexible PCB architecture integrates biosensors, low-noise signal conditioning circuits, and wireless communication modules, enabling stable electrochemical impedance spectroscopy (EIS) measurements with high signal-to-noise ratio. The platform supports real-time physiological monitoring with millisecond-level signal acquisition and provides a scalable hardware interface for portable and wearable biochemical sensing systems.',
    paper_title:
      'A wearable electrochemical biosensor for salivary detection of periodontal inflammation biomarkers: molecularly imprinted polymer sensor with deep learning integration',
    journal: 'Advanced Science',
    year: '2025',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202509658',
  },
  {
    id: 3,
    title: 'Portable MIP-Based POCT Biosensing System',
    image: '/POCT.png',
    summary:
      'A portable point-of-care biosensing system for rapid detection of salivary biomarkers. The platform integrates molecularly imprinted polymer (MIP) sensors, disposable microfluidic cartridges, and smartphone-based electrochemical analysis into a compact diagnostic device. Through selective molecular recognition and impedance-based sensing, the system enables label-free detection of periodontal inflammation biomarkers with high selectivity and sub-nanomolar sensitivity, enabling non-invasive and real-time health monitoring',
    paper_title:
      'A wearable electrochemical biosensor for salivary detection of periodontal inflammation biomarkers: molecularly imprinted polymer sensor with deep learning integration',
    journal: 'Advanced Science',
    year: '2025',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202509658',
  },

  {
    id: 4,
    title: 'Multistacked Graphene Device Platform',
    image: '/Graphene.png',
    summary:
'A multistacked graphene platform engineered for high-performance electronic device integration. The structure combines selectively patterned bilayer graphene channels with monolayer graphene electrodes grown by copper-pocket-assisted chemical vapor deposition, enabling stable carrier transport and low contact resistance. The stacked graphene architecture exhibits high electrical conductivity (>10^3 S m⁻¹) and scalable wafer-level device fabrication, providing a robust platform for next-generation graphene electronics and sensing devices.',    
    paper_title:
      'Multistacked graphene grown by copper-pocket-assisted chemical vapor deposition for versatile device integration',
    journal: 'ACS Applied Nano Materials ',
    year: '2024',
    link: 'https://pubs.acs.org/doi/10.1021/acsanm.4c03913',
  },

   
    {
    id: 5,
    title: 'Hierarchically Structured Nanoporous Gold Platform',
    image: '/SERS.png',
    summary:
'A hierarchically structured nanoporous gold (NPG) platform engineered for high-performance plasmonic sensing. The bicontinuous ligament–pore architecture with nanoscale features (~20–50 nm) generates dense electromagnetic hot spots that significantly enhance localized surface plasmon resonance (LSPR). As a result, the platform enables highly sensitive surface-enhanced Raman scattering (SERS) detection with signal enhancement factors exceeding 10^6, providing ultrasensitive molecular detection for chemical and biological sensing applications.',    
    paper_title:
      'Guided wrinkling of hierarchically structured nanoporous gold films for improved surface-enhanced Raman scattering performance',
    journal: 'Advanced Materials Interfaces',
    year: '2023',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/admi.202300212',
  },
    {
    id: 6,
    title: 'Wrinkled Graphene Nanostructure Platform',
    image: '/go w.png',
    summary:
'A wrinkled graphene nanostructure engineered for high-surface-area electronic and sensing applications. The crumpled graphene morphology introduces dense nanoscale wrinkles and edge defects, significantly increasing the electrochemically active surface area and facilitating efficient charge transfer. The hierarchical graphene architecture exhibits enhanced antibacterial activity and improved electron transport, providing a versatile platform for high-sensitivity chemical sensing and biointerface applications.',    
    paper_title:
      'Improved antibacterial activity of 3D wrinkled graphene oxide films implemented with irreversibly shrinkable shape-memory polymer substrate',
    journal: 'Environmental Science: Nano',
    year: '2025',
    link: 'https://pubs.rsc.org/en/content/articlelanding/2023/en/d2en01075e',
  },

    {
    id: 7,
    title: 'Microstructured Dome Array Platform',
    image: '/MICRO.png',
    summary:
'A photolithography-based microfabrication strategy enabling the formation of periodic microlens array (MLA) architectures with micrometer-scale dome structures. The hemispherical microstructures are produced through precise photoresist patterning and thermal reflow processes, forming highly ordered lens arrays that enhance optical coupling and light extraction efficiency. The microstructured surface also increases interfacial contact area, enabling improved optical sensing and microdevice integration. Importantly, the lithographic process supports wafer-scale patterning and scalable manufacturing, providing a practical platform for large-area optical devices, micro-optoelectronics, and sensing interfaces.',      
    paper_title:
      'A Wearable Electrochemical Biosensor for Salivary Detection of Periodontal Inflammation Biomarkers: Molecularly Imprinted Polymer Sensor with Deep Learning Integration',
    journal: 'Microsystems & Nanoengineering',
    year: '2022',
    link: 'https://www.nature.com/articles/s41378-022-00399-7',
  },


    {
    id: 8,
    title: 'Nanowire Photonic Platform for Nonlinear Optical Devices',
    image: '/SE.png',
    summary:
      'A scalable fabrication strategy for patterned thin-film arrays of selenium nanowires based on flow-enabled self-assembly (FESA). Photoresist (PR) templates define micron-scale pixel architectures, and the nanowire solution is guided into the patterned channels through capillary-driven assembly, forming densely packed and closed nanowire arrays. The resulting structures enable strong nonlinear optical interactions and efficient second-harmonic generation (SHG), allowing wavelength up-conversion and full-color laser emission under laser excitation. This template-guided nanowire assembly process provides a scalable route for manufacturing nonlinear photonic devices and microdisplay technologies.',
    paper_title:
      'Full-color laser displays based on optical second-harmonic generation from the thin film arrays of Selenium nanowires',
    journal: 'ACS Photonics',
    year: '2022',
    link: 'https://pubs.acs.org/doi/10.1021/acsphotonics.1c01435',
  },
  
   {
    id: 9,
    title: 'Micro/Nanopatterned MIP Filtration Platform',
    image: 'IMP.png',
    summary:
      'A rotating cylinder-assisted nanoimprint lithography technique enabling continuous fabrication of micro- and nanoscale surface architectures. The patterned structures significantly increase the effective surface area and serve as functional interfaces for molecularly imprinted polymer (MIP) coatings. The resulting MIP-functionalized membranes enable selective chemisorptive filtration of target molecules such as formaldehyde, achieving high adsorption efficiency and molecular selectivity for environmental sensing and separation technologies.',
    paper_title:
      'Rotating cylinder-assisted nanoimprint lithography for enhanced chemisorbable filtration complemented by molecularly imprinted polymers',
    journal: 'Small',
    year: '2021',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/smll.202105733',
  },

   {
    id: 10,
    title: 'Microbrush-Based Triboelectric Energy Harvesting Platform',
    image: 'TENG.png',
    summary:
      'A microbrush-structured triboelectric nanogenerator designed for flexible and wearable energy harvesting. Arrays of microfiber brushes create dynamic contact interfaces that enhance triboelectric charge generation during sliding motion. The architecture improves electrical output performance with open-circuit voltages exceeding tens of volts and stable operation over >10^5 mechanical cycles, providing a robust platform for self-powered wearable electronics and human-interactive sensing systems',
    paper_title:
      'Sustainable and flexible microbrush-faced triboelectric generator for portable/wearable applications',
    journal: 'Advanced Materials',
    year: '2021',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adma.202102530',
  },

   {
    id: 11,
    title: 'Aligned Graphene Nanoribbon Fabrication Platform',
    image: 'GNR.png',
    summary:
      'A scalable nanofabrication strategy for producing highly aligned graphene nanoribbon (GNR) arrays derived from chemical vapor deposition (CVD)-grown graphene films. Electrospun polymer nanowires are employed as sacrificial etch-mask templates during oxygen plasma lithography, enabling highly aligned ribbon structures with controllable linewidths down to ~50–100 nm. The resulting quasi-one-dimensional graphene nanoribbons exhibit tunable electronic band structures and improved carrier transport properties. This template-guided lithographic approach provides a scalable route for large-area GNR fabrication, offering promising opportunities for graphene nanoelectronics, sensors, and nanoscale transistor devices.',
    paper_title:
      'Highly aligned polymeric nanowire etch-mask lithography enabling the integration of graphene nanoribbon transistors',
    journal: 'Nanomaterials',
    year: '2021',
    link: 'https://www.mdpi.com/2079-4991/11/1/33',
  },

        
   {
    id: 12,
    title: 'Nanodot-Patterned Textile Triboelectric Energy Harvester',
    image: 'TENG_W.png',
    summary:
'A nanodot-patterned textile platform designed for wearable triboelectric energy harvesting. The nanoscale surface structures increase the effective contact area between triboelectric layers, significantly enhancing charge density during mechanical deformation. Integrated with breathable textile substrates such as Gore-Tex fabrics, the system enables efficient mechanical-to-electrical energy conversion for self-powered wearable electronics and smart textile applications.',    
     paper_title:
      'Versatile nanodot-patterned Gore-Tex fabric for multiple energy harvesting in wearable and aerodynamic nanogenerators',
    journal: 'Nano Energy',
    year: '2018',
    link: 'https://www.sciencedirect.com/science/article/pii/S2211285518307110?dgcid=rss_sd_all',
  },

  
 
];

export default function HomeLanding() {
  return <ResearchHighlights items={highlightItems} />;
}
