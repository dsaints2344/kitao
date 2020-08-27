import React, { Component } from "react";
import {
  View,
  TextInput,
  Switch,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

// Modules

import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";

// Components

import TextLabel from "../TextLabel";

// Styles

import { styles, stylesLight } from "./Styles";
import { darkOrange } from "../../../styles/colors";

// Images

const caretDown = require("./Images/icn-caret-down.png");
const icnDatePicker = require("./Images/icn-date-picker.png");

interface FormInputProps {
  maxLength?: number;
  keyboardType?: string;
  onChangeText: () => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: "picker" | "date" | "switch" | "password";
  value?: string;
  data?: [];
  editable?: boolean;
  theme?: "light" | "dark";
  error?: any;
  actionLabel?: string;
  action?: string;
  onValueChange?: () => void;
  withLabel?: boolean;
  label?: string;
  isSignUpForm?: boolean;
  name?: string;
  additionalStyles?: {};
  onFocus?: () => void;
  multiline?: boolean;
  placeholderTextColor?: string;
}

const FormInput = ({
  maxLength,
  keyboardType,
  onChangeText,
  onBlur,
  placeholder,
  type,
  value,
  data,
  editable,
  theme,
  error,
  actionLabel,
  action,
  onValueChange,
  withLabel,
  label,
  isSignUpForm,
  name,
  additionalStyles,
  onFocus,
  multiline,
  placeholderTextColor,
}: FormInputProps) => {
  return (
    <React.Fragment>
      {withLabel && (
        <TextLabel
          weight={"bold"}
          size={16}
          color={"black"}
          style={styles.textInputLabel}
        >
          {label ? label : placeholder}
        </TextLabel>
      )}
      {type === "picker" ? (
        <RNPickerSelect
          key={placeholder}
          placeholder={{
            label: placeholder,
            value: null,
          }}
          placeholderTextColor={
            theme === "light" ? "#8E8E93" : theme ? theme : "#fff"
          }
          items={data}
          onValueChange={onChangeText}
          useNativeAndroidPickerStyle={false}
          doneText="Confirm"
          style={
            theme === "light"
              ? { ...stylesLight, ...additionalStyles }
              : { ...styles, ...additionalStyles }
          }
          value={value}
          Icon={() => {
            return (
              <Image
                style={styles.pickerIcon}
                resizeMode="contain"
                source={caretDown}
              />
            );
          }}
        />
      ) : type === "switch" ? (
        <View style={styles.switchContainer}>
          <Switch
            onValueChange={onValueChange}
            value={value}
            trackColor={{ true: darkOrange }}
          />

          <View>
            <TextLabel
              color={theme === "light" ? "default" : "white"}
              additionalStyles={{ marginLeft: 20, marginTop: 5 }}
            >
              {placeholder}
            </TextLabel>

            {actionLabel && action && (
              <TouchableOpacity activeOpacity={0.8} onPress={() => action()}>
                <TextLabel color={"orange"}>{actionLabel}</TextLabel>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : type === "date" ? (
        <View style={styles.datePickerContainer}>
          <DatePicker
            style={[
              theme === "light" ? stylesLight.datepicker : styles.datepicker,
              additionalStyles,
            ]}
            date={value}
            mode="date"
            placeholder={placeholder}
            iconSource={icnDatePicker}
            format="DD-MM-YYYY"
            minDate="01-01-1910"
            maxDate="31-12-2030"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={
              theme === "light"
                ? {
                    dateIcon: stylesLight.dateIcon,
                    dateInput: stylesLight.dateInput,
                    placeholderText: stylesLight.datePlaceholderText,
                    dateText: stylesLight.dateText,
                    dateTouchBody: stylesLight.dateTouchBody,
                    btnTextConfirm: stylesLight.dateBtnTextConfirm,
                    datePickerCon: stylesLight.datePickerCon,
                    datePicker: stylesLight.datePickerSelect,
                  }
                : {
                    dateIcon: styles.dateIcon,
                    dateInput: styles.dateInput,
                    placeholderText: styles.datePlaceholderText,
                    dateText: styles.dateText,
                    dateTouchBody: styles.dateTouchBody,
                    btnTextConfirm: styles.btnTextConfirm,
                    datePickerCon: styles.datePickerCon,
                    datePicker: styles.datePickerSelect,
                  }
            }
            onDateChange={onChangeText}
          />
        </View>
      ) : (
        <TextInput
          multiline={multiline}
          // scrollEnabled={false}
          style={[
            theme === "light" ? stylesLight.textInput : styles.textInput,
            additionalStyles,
            isSignUpForm ? styles.signUpTextInput : null,
          ]}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          textContentType={type ? type : "none"}
          secureTextEntry={type === "password" ? true : false}
          autoCapitalize="none"
          name={name}
          autoCorrect={false}
          // keyboardType={"number-pad"}
          keyboardType={keyboardType ? keyboardType : "default"}
          editable={editable === undefined ? true : editable}
        />
      )}

      {/* Input validation error message */}

      {error && (
        <TextLabel
          size={13}
          color={"danger"}
          additionalStyles={{ marginBottom: 10 }}
        >
          {error}
        </TextLabel>
      )}
    </React.Fragment>
  );
};

export default FormInput;
