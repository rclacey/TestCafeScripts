import { Selector } from 'testcafe';

fixture `Homepage`
    .page `https://my.clevelandclinic.org`;

test('nav_secondary_home', async t => {
   await t
    .click(Selector('a').withText('Find a Doctor'))
    .click(Selector('[alt="logo-ccf"]'))
    .click(Selector('.nav--secondary.js-nav--secondary').find('a').withText('Locations'))
    .click(Selector('[alt="logo-ccf"]'))
    .click(Selector('a').withText('Patients'))
    .click(Selector('[alt="logo-ccf"]'))
    .click(Selector('a').withText('Health Library'))
    .click(Selector('[alt="logo-ccf"]'))
    .click(Selector('a').withText('Institutes'))
});

test('call_to_action', async t => {
    await t
     .click(Selector('a').withText('FIND A DOCTOR'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('GET DIRECTIONS'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('APPOINTMENTS'))
 });

 test('nav_service_for_patients', async t => {
    await t
     .click(Selector('.service.content-pad').find('a').withText('VIEW ALL RESOURCES'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Parking'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Billing'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Medical Records'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Express Care Online'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('[title="Cleveland Clinic MyChart"]'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Online Second Opinion'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Online Bill Pay'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('MyImages'))
 });

 test('nav_service_for_doctors', async t => {
    await t
     .click(Selector('.button.button--arrow[title="For Medical Professionals"]'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Refer a Patient'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Education'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('Physician Recruitment'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('DrConnect'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('MyPractice'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('a').withText('eRadiology'))
     .click(Selector('[alt="logo-ccf"]'))
     .click(Selector('[title="Critical Care Transport"]'))
     .click(Selector('[alt="logo-ccf"]'))
 });

 test('call_to_action_image', async t => {
        await t
        .click(Selector('.call-to-action__image').withText('LEARN MORE ABOUT OUR RANKINGS'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.call-to-action__image').withText('EXPLORE NOW'))
        .click(Selector('.-logo'))
        .click(Selector('.call-to-action__image').withText('CONNECT WITH DOCTORS ONLINE'))
        .click(Selector('[alt="logo-ccf"]'))
 });

 test('call_to_action_center', async t => {
     await t
        .click(Selector('[class^="call-to-action-center__subheading"].nth(1)'))
 });

 test('call_to_action_66_33', async t => {
    await t
       .click(Selector('.1-66-33--2.call-to-action-66-33__item').find('.button--secondary.button--large.button--arrow'))
});

test('footer_nav_actions', async t => {
    await t
        .click(Selector('.footer__nav').find('a[title="Appointments"]'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.footer__nav').find('a[title="Pay Your Bill"]'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.footer__nav').withText('Financial Assistance'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.footer__nav').find('a[title="Accepted Insurance"]'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.footer__nav').find('a[title="Refer a Patient"]'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.footer__nav').find('a[title="Phone Directory"]'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.footer__nav').withText('Events Calendar'))
        .click(Selector('[alt="logo-ccf"]'))
        .click(Selector('.footer__nav').find('a[title="Make a Donation"]'))
});

test('footer_nav_about', async t => {
    await t
    .click(Selector('.footer__nav').withText('About Us'))
    .click(Selector('.footer__nav').withText('Locations'))
    .click(Selector('.footer__nav').withText('Quality & Patient Safety'))
    .click(Selector('.footer__nav').withText('Office of Diversity & Inclusion'))
    .click(Selector('.footer__nav').withText('Patient Experience'))
    .click(Selector('.footer__nav').withText('Research & Innovations'))
    .click(Selector('.footer__nav').withText('Government & Community Relations'))
    .click(Selector('.footer__nav').withText('For Employees'))
    .click(Selector('.footer__nav').withText('Resources for Medical Professionals'))
    .click(Selector('.footer__nav').withText('Careers'))
});

test('footer_nav_blog_news_apps', async t => {
    await t
    .click(Selector('.footer__nav').find('a[title="Newsroom"]'))
    .click(Selector('.-logo'))
    .click(Selector('.footer__nav').find('a[title="Mobile Apps"]'))
    .click(Selector('[alt="logo-ccf"]'))
    .click(Selector('.footer__nav').find('a[title="Consult QD"]'))
    .click(Selector('.-logo'))
    .click(Selector('.footer__nav').find('a[title="Health Essentials"]'))
});

test('.footer_nav_site_info_policies', async t => {
    await t
        .click(Selector('.footer__nav').withText('Send Us Feedback'))
        .click(Selector('.footer__nav').withText('Site Map'))
        .click(Selector('.footer__nav').withText('About this Website'))
        .click(Selector('.footer__nav').withText('Copyright, Reprint & Licensing'))
        .click(Selector('.footer__nav').withText('Website Terms of Use'))
        .click(Selector('.footer__nav').withText('Privacy Policy'))
        .click(Selector('.footer__nav').withText('Notice of Privacy Practices'))
        .click(Selector('.footer__nav').withText('Non-Discrimination Notice'))
});

test('.footer_social_icons', async t => {
    await t
        .click(Selector('.icon-social-facebook'))
        .click(Selector('.icon-social-twitter'))
        .click(Selector('.icon-social-youtube'))
        .click(Selector('.icon-social-instagram'))
        .click(Selector('.icon-social-linkedin'))
        .click(Selector('.icon-social-pinterest'))
        .click(Selector('.icon-social-snapchat'))
});