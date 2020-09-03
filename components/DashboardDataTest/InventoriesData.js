let inventories = {
  hardware: 0,
  software: 0,
  people: 0,
  premises: 0,
};

function getInventoryData() {
  return inventories;
}
function setInventoryData(asset) {
  switch (asset) {
    case "Hardware":
      inventories.hardware++;
      break;
    case "Software":
      inventories.software++;
      break;
    case "People":
      inventories.people++;
      break;
    case "Premises":
      inventories.premises++;
      break;
    default:
      console.log("not there");
  }
  console.log(inventories);
}

export { getInventoryData, setInventoryData };
