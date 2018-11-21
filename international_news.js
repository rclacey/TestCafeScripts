import { Selector } from 'testcafe';

fixture `newsroom.internationalnews`
    .page `https://newsroom.clevelandclinic.org/category/international-news/`;

test('New Test', async t => {
    await t
        .click(Selector('h2').withText('Doctor to Cycle 100 Miles in Memory of Father'))
        .click(Selector('h2').withText('يقود دراجته مسافة 100 ميل تخليداً لذكرى والده الراحل'))
        .click(Selector('h2').withText('Luye Medical Collaborates with Cleveland Clinic to Pioneer Value-Based Healthcare in China'))
        .click(Selector('h2').withText('SURVEY REVEALS CHINESE FAIL TO RECOGNIZE HEART ATTACK SYMPTOMS WHEN COMPARED WITH STROKE SYMPTOMS'))
        .click(Selector('h2').withText('调查表明很多中国人未能区分心脏病与中风的症状'))
        .click(Selector('h2').withText('Cleveland Clinic Abu Dhabi Establishes UAE’s First Comprehensive Organ Transplant Program'))
        .click(Selector('h2').withText('Less Than Half of Indians Know How to Respond if Having a Heart Attack'))
        .click(Selector('h2').withText('دراسة أجراها المستشفى الأمريكي الشهير تُظهر حاجة ماسّة لنشر الوعي في أوساط المجتمع'))
        .click(Selector('h2').withText('Few Brits Know Chewing Aspirin is a First Response to a Heart Attack, Survey Finds'))
        .click(Selector('h2').withText('Survey by Leading U.S. Hospital Cleveland Clinic Shows Need to Prioritize Heart Health Awareness in GCC'));
})