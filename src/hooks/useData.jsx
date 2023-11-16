const linkKey = "links";
const personalKey = "personal";
const imageKey = "image";

export const addLinkData = (linkData) => {
  localStorage.setItem(linkKey, JSON.stringify(linkData));
}

export const getLinkData = () => {
  try {
    const dataLinks = localStorage.getItem(linkKey);
    if (dataLinks) {
      const data = JSON.parse(dataLinks);
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null; 
  }
}

export const addPersonalData = (personalData) => {
  localStorage.setItem("personal", JSON.stringify(personalData));
}

export const getPersonalData = () => {
  try {
    const dataPersonal = localStorage.getItem("personal");
    if (dataPersonal) {
      const data = JSON.parse(dataPersonal);
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null; 
  }
}

export const addPersonalImage = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    localStorage.setItem('image', e.target.result);
  };
  reader.readAsDataURL(file);
}

export const getPersonalImage = () => {
  try {
    const file = localStorage.getItem("image");
    if (file) {
      return file;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null; 
  }
}
