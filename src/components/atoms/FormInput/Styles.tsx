import { StyleSheet, Dimensions } from "react-native";
import { white, black, darkOrange } from "../../../styles/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  textInput: {
    marginBottom: 12,
    paddingTop: 10,
    paddingBottom: 10,
    height: 40,
    fontSize: 18,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: black,
    width: width * 0.9,
    // marginTop: 0,
  },

  textInputLabel: {
    marginBottom: 0,
  },

  signUpTextInput: {
    paddingLeft: 10,
    fontWeight: "normal",
  },

  switchContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    marginBottom: 30,
  },

  inputIOS: {
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 0,
    height: 45,
    paddingRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    color: white,
  },

  inputAndroid: {
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 0,
    height: 45,
    paddingRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    color: white,
  },

  datepicker: {
    width: "100%",
    marginBottom: 20,
    // paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    borderBottomColor: "#999999",
    borderBottomWidth: 1,
  },

  dateTouchBody: {
    height: 45,
  },

  datePickerSelect: {
    backgroundColor: "#d0d4db",
  },

  datePickerCon: {
    backgroundColor: "#EFF1F2",
  },

  dateIcon: {
    position: "absolute",
    right: -5,
    top: 11,
    marginRight: 0,
    width: 18,
    height: 20,
  },

  dateInput: {
    margin: 0,
    borderWidth: 0,
    alignItems: "flex-start",
  },

  datePlaceholderText: {
    fontSize: 16,
    color: "#8E8E93",
  },

  dateText: {
    fontSize: 16,
    color: black,
  },

  dateBtnTextConfirm: {
    color: darkOrange,
  },

  iconContainer: {
    top: 14,
    right: 5,
  },

  pickerIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});

export const stylesLight = StyleSheet.create({
  textInput: {
    width: "100%",
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 52,
    backgroundColor: white,
    // borderColor: "#000",
    // borderWidth: 1,
    // borderRadius: 5,
    fontSize: 16,
    color: black,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#DEDEF6",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 1,
  },

  inputIOS: {
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 52,
    paddingRight: 30,
    backgroundColor: white,
    // borderWidth: 1,
    // borderColor: '#E6E6F0',
    borderRadius: 50,
    color: black,
    // shadowOffset: { width: 0, height: 4 },
    // shadowColor: '#DEDEF6',
    // shadowOpacity: 0.4,
    // shadowRadius: 4,
    elevation: 1,
  },

  inputAndroid: {
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 52,
    paddingRight: 30,
    // borderWidth: 2,
    // borderColor: '#555',
    borderRadius: 50,
    color: black,
    // shadowOffset: { width: 0, height: 4 },
    // shadowColor: '#DEDEF6',
    // shadowOpacity: 0.4,
    // shadowRadius: 4,
    backgroundColor: white,
    // elevation: 1,
  },

  datepicker: {
    width: "100%",
    marginBottom: 20,
    // paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 52,
    backgroundColor: white,
    borderColor: "#E6E6F0",
    borderRadius: 50,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#DEDEF6",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 1,
  },

  datePickerSelect: {
    backgroundColor: "#d0d4db",
  },

  datePickerCon: {
    backgroundColor: "#EFF1F2",
  },

  dateTouchBody: {
    height: 45,
  },

  dateIcon: {
    position: "absolute",
    right: -5,
    top: 11,
    marginRight: 0,
    width: 18,
    height: 20,
  },

  dateInput: {
    margin: 0,
    borderWidth: 0,
    alignItems: "flex-start",
  },

  datePlaceholderText: {
    fontSize: 16,
    color: "#8E8E93",
  },

  dateText: {
    fontSize: 16,
    color: black,
  },

  dateBtnTextConfirm: {
    color: "#157EFA",
    fontWeight: "600",
    fontSize: 15,
  },

  iconContainer: {
    top: 14,
    right: 5,
  },

  pickerIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});
