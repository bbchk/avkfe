
export default async function init() {
  try {
    await this.go(location.pathname);
  } catch (err) {
    // TODO: display error screen
    console.error('Error during router initialization:', err);
  }

  window.on('popstate', (event) => {
    console.log('popstate happened');
    this.go(event.state.route, false);
  });
}
