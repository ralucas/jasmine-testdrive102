describe('join', function() {
 it('should return one and two and three', function() {
  expect(join(['one', 'two', 'three'], ' and ')).toBe('one and two and three');
 });
 it('should return yes/no', function() {
  expect(join(['yes', 'no'], '/')).toBe('yes/no');
 });
 it('should return yesno with no delimeter', function() {
  expect(join(['yes', 'no'])).toBe('yesno');
 });
 it('should return yes,no,hello,goodbye given extra arguments', function() {
  expect(join(['yes', 'no', 'hello', 'goodbye'], ',', ' ', ' and ')).toBe('yes,no,hello,goodbye');
 });
 it('should return 1234', function() {
  expect(join([1,2,3,4])).toBe('1234');
 });
 it('should return 1+2+3+4', function() {
  expect(join([1,2,3,4],'+')).toBe('1+2+3+4');
 });
})