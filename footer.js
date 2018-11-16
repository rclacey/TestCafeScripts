import { Selector } from 'testcafe';

fixture `Footer`
    .page `https://my.clevelandclinic.org`;

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
})
