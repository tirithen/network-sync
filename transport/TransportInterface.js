class TransportInterface {
  on() {
    throw new Error('Must implement on');
  }
}

module.exports = TransportInterface;
