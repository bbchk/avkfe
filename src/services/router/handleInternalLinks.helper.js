let delegationSetup = false;

export default function handleInternalLinks(inLinkClass) {
  // Set up delegation only once
  if (!delegationSetup) {
    document.addEventListener('click', (event) => {
      const target = event.target.closest(`a.${inLinkClass}`);

      if (target) {
        event.preventDefault();
        const url = new URL(target.href).pathname;
        this.go(url);
      }
    });
    delegationSetup = true;
  }
}
