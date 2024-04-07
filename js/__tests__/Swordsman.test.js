import Swordsman from '../swordman';

test('should check the class Swordsman', () => {
  const character = new Swordsman('Player', 'Swordsman');
  const result = {
    name: 'Player',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});