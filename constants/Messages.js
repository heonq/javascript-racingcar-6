const PREFIX = '[ERROR]';

const MESSAGES = Object.freeze({
  carNameQuery: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  carNameDelimiter: ',',
  trialCountQuery: '시도할 횟수는 몇 회인가요?\n',
  lineBreak: '\n',
  resultMessage: '실행결과\n',
  nameDelimiter: ' : ',
  distance: '-',
  finalWinner: '최종 우승자',
  winnerDelimiter: ', ',
  invalidNameLength: `${PREFIX} 자동차의 이름은 5글자를 초과할 수 없습니다.`,
  invalidCarCount: `${PREFIX} 자동차는 최소 2대 이상이어야 합니다.`,
  duplicatedName: `${PREFIX} 중복된 이름을 입력할 수 없습니다.`,
  invalidTrial: `${PREFIX} 시도할 횟수는 양의 정수만 입력 가능합니다.`,
});

export default MESSAGES;
