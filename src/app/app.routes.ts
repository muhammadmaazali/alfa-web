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

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'commercial-inquiries', component: CommercialInquiriesComponent },
    { path: 'become-supplier', component: BecomeASupplierComponent },
    { path: 'about-alfa', component: AboutAlfaComponent },
    { path: 'mission-and-vision', component: MissionAndVisionComponent },
    { path: 'leadership', component: LeadershipComponent },
    { path: 'our-culture', component: OurCultureComponent },
    { path: 'our-strategy', component: OurStrategyComponent },
    { path: 'ethics-and-compliance', component: EthicsAndComplianceComponent },
    { path: 'accreditations', component: AccreditationsComponent },
];