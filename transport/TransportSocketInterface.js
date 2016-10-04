class TransportSocketInterface {
  emit() {
    throw new Error('Must implement emit');
  }

  on() {
    throw new Error('Must implement on');
  }
}

module.exports = TransportSocketInterface;
