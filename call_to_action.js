import { Selector } from 'testcafe';

fixture `Call to Action`
    .page `https://my.clevelandclinic.org`;

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
        .click(Selector('.call-to-action-center__content').withText('GET STARTED'))
        .click(Selector('[alt="logo-ccf"]'))
});

test('call_to_action_66_33', async t => {
    await t
       .click(Selector('.call-to-action-66-33__item').withText('VIEW STORIES'))
});