import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import * as React from 'react';
//import { ToastContainer } from 'react-toastify';
import Homepage from './components/Homepage';
import BusinessInfo from './components/Contractor cert/BusinessInfo';
import BusinessAddress from './components/Contractor cert/BusinessAddress';
import BusinessContact from './components/Contractor cert/BusinessContact';
import BusinessDocuments from './components/Contractor cert/BusinessDocuments';
import EngineerDetails from './components/Contractor cert/EngineerDetails';
import Permit from './components/Start To Build Form/Permit';
import Permit2 from './components/Start To Build Form/Permit2';
import Permit3 from './components/Start To Build Form/Permit3';
import STBPreview from './components/Start To Build Form/Preview';
import CertPreview from './components/Contractor cert/CertPreview';
import ApplicantInfo from './components/Application Permit/ApplicantInfo';
import BuildingDescription from './components/Application Permit/BuildingDescription';
import LocationSite from './components/Application Permit/LocationSite';
import Accessibility from './components/Application Permit/Accessibility';
import AdditionalInfo from './components/Application Permit/AdditionalInfo';
import PersonalInfo from './components/Payers Registration/PersonaInfo';
import PersonalInfo2 from './components/Payers Registration/PersonalInfo2';
import ContactInfo from './components/Payers Registration/ContactInfo';
import ProfessionalInfo from './components/Payers Registration/ProfessionInfo';
import Security from './components/Payers Registration/Security';
import RegistrationPreview from './components/Payers Registration/RegistrationPreview';
import Welcome from './components/Payers Registration/Welcome';
import SignIn from "./components/Payers Registration/Signin";
import LandingPage from "./components/LandingPage";
import InspectionForm from "./components/Inspection/InspectionForm";
import BuildingDesc from "./components/Inspection/ BuildingDesc";
import PendingApplication from "./components/Application Permit/PendingApplications";
import SiteLocation from "./components/Inspection/SiteLocation";
import Access from "./components/Inspection/Access";
import Access2 from "./components/Inspection/Access2";
import AddInfo from "./components/Inspection/AddInfo";
import AddInfo2 from "./components/Inspection/AddInfo2";
import InspectionPreview from "./components/Inspection/InspectionPreview";
import OccupancyPermit from "./components/Occupancy/OccupanyPermit";
import OccupancyDocs from "./components/Occupancy/OccupancyDocs";
import CompletionDataes from "./components/Occupancy/CompletionDates";
import OccupancyPreview from "./components/Occupancy/OccupancyPreview";
import Wallet from "./components/Wallet/Wallet";
import LinkCard from "./components/Wallet/LinkCard";
import TopupAccount from "./components/Wallet/TopupAccount";
import AddCurrency from "./components/Wallet/AddCurrency";
import Profile from "./components/Profile";
import Land from "./components/Land/Land";
import ApplicationPermitPreview from "./components/Application Permit/ApplicationPermitPreview";
import RegisterLand from "./components/Land/RegisterLand";
import SupportingDocuments from "./components/Land/SupportingDocuments";
import BusinessAccounts from "./components/Contractor cert/BusinessAccounts";
import LandPreview from "./components/Land/LandPreview";
import ApprovedApplications from "./components/Application Permit/ApprovedApplications";
import Professionals from "./components/Application Permit/Professionals";
import SupportiveDocuments from "./components/Application Permit/SupportiveDocuments";
import Dashboard from "./components/Dashboard/Dashboard";
import Payment from "./components/Payments";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import New from "./components/New";
import Layout from "./components/Layout";




const App = () => {

  return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                {/* Landing Page */}
                <Route path="/" element={<LandingPage />}/>

                {/* Auth and registration */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/personal_info" element={<PersonalInfo />} />
                <Route path='/personal_info_page2' element={<PersonalInfo2 />} />
                <Route path='/contact' element={<ContactInfo />} />
                <Route path='/profession' element={<ProfessionalInfo />} />
                <Route path='/security' element={<Security />} />
                <Route path='/registration_preview' element={<RegistrationPreview />} />
                <Route path='/welcome_page' element={<Welcome />} />


                    {/*<Route element={<ProtectedRoute  />}>*/}
                        {/* Home */}
                        <Route path='/home' element={<Homepage />} />

                        {/* Application Permit */}
                        <Route path='/applicant_info' element={<ApplicantInfo />} />
                        <Route path='/building_desc' element={<BuildingDescription />} />
                        <Route path='/location_site' element={<LocationSite />} />
                        <Route path='/accessibility_to_service' element={<Accessibility />} />
                        <Route path='/professionals_engaged' element={<Professionals />} />
                        <Route path='/additional_info' element={<AdditionalInfo />} />
                        <Route path='/supportive_documents' element={<SupportiveDocuments />} />
                        <Route path='/application_permit_preview' element={<ApplicationPermitPreview />} />
                        <Route path='/pending_applications' element={<PendingApplication />} />
                        <Route path='/approved_applications' element={<ApprovedApplications />} />
                        

                        {/* Contractor Certificate */}
                        <Route path="/business_info" element={<BusinessInfo />} />
                        <Route path="/business_address" element={<BusinessAddress />}/>
                        <Route path="/business_contact" element={<BusinessContact />}/>
                        <Route path="/business_documents" element={<BusinessDocuments />}/>
                        <Route path="/engineer_details" element={<EngineerDetails />}/>
                        <Route path="/contractor_certificate_preview" element={<CertPreview />}/>
                        <Route path="/business_accounts" element={<BusinessAccounts />}/>


                        {/* Start To Build Permit */}
                        <Route path="/start_to_build_permit" element={<Permit />}/>
                        <Route path="/start_to_build_permit_page2" element={<Permit2 />}/>
                        <Route path="/start_to_build_permit_page3" element={<Permit3 />}/>
                        <Route path="/start_to_build_preview" element={<STBPreview />}/>

                        {/* Inspection */}
                        <Route path="/inspection_form" element={<InspectionForm />}/>
                        <Route path="/inspection_building_description" element={<BuildingDesc />}/>
                        <Route path="/inspection_site_location" element={<SiteLocation />}/>
                        <Route path='/inspection_accessibility_to_service' element={<Access />} />
                        <Route path='/inspection_accessibility_to_service_page2' element={<Access2 />} />
                        <Route path='/inspection_additional_info' element={<AddInfo />} />
                        <Route path='/inspection_additional_info_page2' element={<AddInfo2 />} />
                        <Route path='/inspection_preview' element={<InspectionPreview />} />

                        {/* Occupancy */}
                        <Route path="/occupancy_permit" element={<OccupancyPermit />}/>
                        <Route path="/occupancy_documents" element={<OccupancyDocs />}/>
                        <Route path="/occupancy_dates" element={<CompletionDataes />}/>
                        <Route path="/occupancy_preview" element={<OccupancyPreview />}/>

                        {/* Wallet */}
                        <Route path="/wallet" element={<Wallet />}/>
                        <Route path="/link_a_card" element={<LinkCard />}/>
                        <Route path="/add_currency" element={<AddCurrency />}/>
                        <Route path="/topup_account" element={<TopupAccount />}/>

                        {/* Profile */}
                        <Route path="/profile" element={<Profile />}/>

                        {/* Land */}
                        <Route path="/land" element={<Land />}/>
                        <Route path="/register_land" element={<RegisterLand />}/>
                        <Route path="/land_supporting_documents" element={<SupportingDocuments />}/>
                        <Route path="/land_preview" element={<LandPreview />}/>
                        
                        {/* Dashboard */}
                        <Route path="/dashboard" element={<Dashboard />}/>
                        <Route path="/payment" element={<Payment />}/>

                        {/* New Component */}
                        <Route path="/new" element={<New />}/>
                    </Route>
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
  );
}

export default App;
