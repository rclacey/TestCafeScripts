import { Selector } from 'testcafe';

fixture `newsroom.photography`
    .page `https://newsroom.clevelandclinic.org/photography-2/`;

test('Buildings', async t => {
    await t
        .click(Selector('.gallery-icon.landscape').find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(1).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(2).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(3).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(4).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(5).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(6).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(7).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(8).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(9).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(10).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(11).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(12).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(13).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(14).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(15).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(16).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(17).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(18).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(19).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(20).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(21).find('.attachment-thumbnail.size-thumbnail'))
})

test('Regional Hospitals', async t => {
    await t
        .click(Selector('.gallery-icon.landscape').nth(23).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(24).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(25).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(26).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(27).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(28).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(29).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(30).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(31).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(32).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(33).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(34).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(35).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(36).find('.attachment-thumbnail.size-thumbnail'))
})

test('National & International Locations', async t => {
    await t
        .click(Selector('.gallery-icon.landscape').nth(37).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(38).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(39).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(1).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(40).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(41).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(42).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(43).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(44).find('.attachment-thumbnail.size-thumbnail'))
})

test('Family Health Centers', async t => {
    await t
        .click(Selector('.gallery-icon.landscape').nth(45).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(46).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(47).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(48).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(49).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(50).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(51).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(52).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(53).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(54).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(55).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(56).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(57).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(58).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(59).find('.attachment-thumbnail.size-thumbnail'))
})

test('Cleveland Clinic History', async t => {
    await t
        .click(Selector('.gallery-icon.landscape').nth(60).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(2).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(61).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(3).find('.attachment-thumbnail.size-thumbnail'))
    })
