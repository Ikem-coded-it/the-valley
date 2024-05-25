export const objectToFormData = (obj: any) => {
    const formData = new FormData();
  
    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value as any);
    });
    return formData;
};

export const truncateString = (str, num) => {
    if (str.length <= num) {
        return str;
    } else {
        return str.substring(0, num) + '...';
    }
  }