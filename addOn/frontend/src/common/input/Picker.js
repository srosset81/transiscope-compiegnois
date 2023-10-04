import React, { useCallback } from 'react';
import { useInput, InputHelperText, useTranslateLabel } from 'react-admin';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const Picker = ({
  PickerComponent,
  label,
  source,
  helperText,
  fullWidth,
  onBlur,
  onChange,
  format,
  parse,
  validate,
  defaultValue,
  locale,
  translations,
  stringFormat = 'ISO',
  ...rest
}) => {
  const {
    field,
    isRequired,
    fieldState: { error, isTouched, invalid },
    formState: { isSubmitted }
  } = useInput({
    format,
    onBlur,
    onChange,
    parse,
    source,
    validate,
    defaultValue
  });

  const handleChange = useCallback(
    (value) => {
      if (value instanceof Date) {
        field.onChange(stringFormat === 'ISO' ? value.toISOString() : value.toString());
      } else {
        field.onChange(null);
      }
    },
    [field, stringFormat]
  );

  const translateLabel = useTranslateLabel();
  const translatedLabel = (
    <span>
      {translateLabel({
        label,
        source
      })}
      {isRequired && <span aria-hidden="true">&thinsp;*</span>}
    </span>
  );

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={locale}
      localeText={translations?.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <PickerComponent
        label={translatedLabel}
        slotProps={{
          textField: {
            error: (isTouched || isSubmitted) && invalid,
            size: 'small',
            fullWidth,
            helperText: (
              <InputHelperText touched={isTouched || isSubmitted} error={error?.message} helperText={helperText} />
            )
          }
        }}
        value={field.value ? new Date(field.value) : null}
        onChange={handleChange}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default Picker;

const DateTimeInput = props => <Picker PickerComponent={DateTimePicker} {...props} />;

export {
  DateTimeInput
};
