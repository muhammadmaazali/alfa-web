import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './AlfaMarine/components/home/home.component';
import { CommercialInquiriesComponent } from './AlfaMarine/components/commercial-inquiries/commercial-inquiries.component';
import { BecomeASupplierComponent } from './AlfaMarine/components/become-a-supplier/become-a-supplier.component';
import { SpeakUpComponent } from './AlfaMarine/components/speak-up/speak-up.component';
import { AboutAlfaComponent } from './AlfaMarine/components/about-alfa/about-alfa.component';
import { MissionAndVisionComponent } from './AlfaMarine/components/mission-and-vision/mission-and-vision.component';
import { LeadershipComponent } from './AlfaMarine/components/leadership/leadership.component';
import { OurCultureComponent } from './AlfaMarine/components/our-culture/our-culture.component';
import { OurStrategyComponent } from './AlfaMarine/components/our-strategy/our-strategy.component';
import { EthicsAndComplianceComponent } from './AlfaMarine/components/ethics-and-compliance/ethics-and-compliance.component';
import { AccreditationsComponent } from './AlfaMarine/components/accreditations/accreditations.component';
import { CoreValuesComponent } from './AlfaMarine/components/core-values/core-values.component';
import { ModularBuildingsSolutionsComponent } from './AlfaMarine/components/modular-buildings-solutions/modular-buildings-solutions.component';
import { LivingQuartersRefurbishmentComponent } from './AlfaMarine/components/living-quarters-refurbishment/living-quarters-refurbishment.component';
import { RepairAndMaintenanceComponent } from './AlfaMarine/components/repair-and-maintenance/repair-and-maintenance.component';
import { RigAndShipRepairSolutionsComponent } from './AlfaMarine/components/rig-and-ship-repair-solutions/rig-and-ship-repair-solutions.component';
import { WeldingAndFabricationServicesComponent } from './AlfaMarine/components/welding-and-fabrication-services/welding-and-fabrication-services.component';
import { AbrasiveBlastingAndPaintingServicesComponent } from './AlfaMarine/components/abrasive-blasting-and-painting-services/abrasive-blasting-and-painting-services.component';
import { ArchitecturalAndHVACComponent } from './AlfaMarine/components/architectural-and-hvac/architectural-and-hvac.component';
import { ThermalAndAcousticInsulationServicesComponent } from './AlfaMarine/components/thermal-and-acoustic-insulation-services/thermal-and-acoustic-insulation-services.component';
import { OurProductSuppliesComponent } from './AlfaMarine/components/our-product-supplies/our-product-supplies.component';
import { EnvironmentalResponsibilityComponent } from './AlfaMarine/components/environmental-responsibility/environmental-responsibility.component';
import { HealthSafetyAndEnvironmentalPolicyComponent } from './AlfaMarine/components/health-safety-and-environmental-policy/health-safety-and-environmental-policy.component';
import { QualityAssurancePolicyComponent } from './AlfaMarine/components/quality-assurance-policy/quality-assurance-policy.component';
import { CareersComponent } from './AlfaMarine/components/careers/careers.component';
import { SPEAKUPComponent } from './AlfaMarine/components/speakup/speakup.component';
import { DownloadComponent } from './AlfaMarine/components/download/download.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'commercial-inquiries', component: CommercialInquiriesComponent },
    { path: 'become-a-supplier', component: BecomeASupplierComponent },
    { path: 'about-alfa', component: AboutAlfaComponent },
    { path: 'mission-and-vision', component: MissionAndVisionComponent },
    { path: 'core-values', component: CoreValuesComponent },
    { path: 'leadership', component: LeadershipComponent },
    { path: 'our-culture', component: OurCultureComponent },
    { path: 'our-strategy', component: OurStrategyComponent },
    { path: 'ethics-and-compliance', component: EthicsAndComplianceComponent },
    { path: 'accreditations', component: AccreditationsComponent },
    { path: 'environmental-responsibility', component: EnvironmentalResponsibilityComponent },
    { path: 'health-safety-environmental-policy', component: HealthSafetyAndEnvironmentalPolicyComponent },
    { path: 'quality-assurance-policy', component: QualityAssurancePolicyComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'speak-up', component: SPEAKUPComponent },
    { path: 'downloads', component: DownloadComponent },
    { path: 'accreditations', component: AccreditationsComponent },
    { path: 'accreditations', component: AccreditationsComponent },
    { path: 'accreditations', component: AccreditationsComponent },
    { path: 'modular-buildings-solutions', component: ModularBuildingsSolutionsComponent },
    { path: 'living-quarters-refurbishment', component: LivingQuartersRefurbishmentComponent },
    { path: 'repair-and-maintenance-of-hvac', component: RepairAndMaintenanceComponent },
    { path: 'rig-and-ship-repair-solutions', component: RigAndShipRepairSolutionsComponent },
    { path: 'welding-and-fabrication-services', component: WeldingAndFabricationServicesComponent },
    { path: 'abrasive-blasting-and-painting-services', component: AbrasiveBlastingAndPaintingServicesComponent },
    { path: 'architectural-hvac-electrical', component: ArchitecturalAndHVACComponent },
    { path: 'thermal-and-acoustic-insulation-services', component: ThermalAndAcousticInsulationServicesComponent },
    { path: 'our-product-or-supplies', component: OurProductSuppliesComponent },
];