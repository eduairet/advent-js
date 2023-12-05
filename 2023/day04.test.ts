import { decode } from './day04';

test('decodes the message correctly', () => {
    const message = 'hola (odnum)';
    const decodedMessage = decode(message);
    expect(decodedMessage).toBe('hola mundo');
});
