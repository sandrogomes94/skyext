import { SkynetClient } from 'skynet-js';

window.addEventListener('DOMContentLoaded', () => {

  const client = new SkynetClient('https://siasky.net/');

  const uploadFile = document.querySelector('#save-trigger');

  const selectElement = document.querySelector("#mediaFile");

  uploadFile.addEventListener('click', (async () => {
    try {
      let file = document.getElementById("mediaFile").files[0];
      let reader = new FileReader();
      reader.readAsBinaryString(file);
      const { skylink } = await client.uploadFile(file);
      const skylinkUrl = await client.getSkylinkUrl(skylink);
      document.getElementById('mediaLink').href = skylinkUrl
      document.getElementById('mediaLink').text = skylinkUrl
      setFileSkylink(skylinkUrl);
    } catch (error) {
      console.log(error)
    }
  }));

  selectElement.addEventListener("change", (event) => {
    const result = document.querySelector("#file-selected");
    result.textContent = `${event.target.value}`;
  });

});
