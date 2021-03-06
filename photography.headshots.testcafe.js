import { Selector } from 'testcafe';

fixture `photography.headshots`
    .page `https://newsroom.clevelandclinic.org/headshots/`;

test('headshots', async t => {
    await t
        .click(Selector('.gallery-icon.landscape').find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(1).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(1).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.attachment-thumbnail.size-thumbnail[alt="Toby-Cosgrove-Cleveland-Clinic"]'))
        .click(Selector('.gallery-icon.landscape').nth(2).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(3).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(4).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(5).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(6).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(7).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(3).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.attachment-thumbnail.size-thumbnail[alt="Serpil-Erzurum-Cleveland-Clinic"]'))
        .click(Selector('.gallery-icon.portrait').nth(9).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(10).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(11).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(12).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(13).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(14).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(15).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(16).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(17).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(18).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(19).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(20).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(21).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(22).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(23).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(24).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(25).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(26).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(27).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(28).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(29).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(34).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(33).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(32).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(31).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(30).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(35).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(36).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(37).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(38).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(39).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(44).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(43).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(42).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(41).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(40).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(45).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(46).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(47).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.landscape').nth(4).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(48).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(53).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(52).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(51).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(50).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(49).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(54).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(55).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(56).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(57).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(58).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(63).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(62).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(61).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(60).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(59).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(64).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(65).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(66).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(67).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(68).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(73).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(72).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(71).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(70).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(69).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(74).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(75).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(76).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(77).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(78).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(79).find('.attachment-thumbnail.size-thumbnail'))
        .click(Selector('.gallery-icon.portrait').nth(80).find('.attachment-thumbnail.size-thumbnail'));
});