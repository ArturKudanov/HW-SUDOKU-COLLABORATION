const { isSolved, prettyBoard } = require('../sudoku');

test('isSolved should return true for complete puzzle row', () => {
  const completedRow = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  expect(isSolved(completedRow)).toBe(true);
});

test('prettyBoard should format single row correctly', () => {
  // Мокаем console.log
  const mockLog = jest.spyOn(console, 'log').mockImplementation();

  const board = [['1', '2', '3']];
  prettyBoard(board, board);

  // Проверяем что вывод содержит разделители |
  expect(mockLog).toHaveBeenCalledWith('1|2|3');

  // Восстанавливаем console.log
  mockLog.mockRestore();
});
