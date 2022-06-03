export const fName = new RegExp("^[a-zA-Z ]+$");

export const uName = new RegExp("^[a-zA-Z0-9_@.]+$");

export const uEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const uPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
