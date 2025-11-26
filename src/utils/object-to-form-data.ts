export function objectToFormData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: Record<string, any>,
  isUpdate: boolean,
  form: FormData = new FormData(),
  parentKey?: string
): FormData {
  const buildKey = (key: string) => (parentKey ? `${parentKey}[${key}]` : key);

  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const formKey = buildKey(key);

    if (value instanceof File) {
      form.append(formKey, value);
      continue;
    }

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${formKey}[${index}]`;

        if (item instanceof File) {
          form.append(arrayKey, item);
        } else {
          objectToFormData(item, isUpdate, form, arrayKey);
        }
      });
      continue;
    }

    if (value !== null && typeof value === "object") {
      objectToFormData(value, isUpdate, form, formKey);
      continue;
    }

    form.append(formKey, value ?? "");
  }
  // ⭐ Add _method ONLY for top-level call (no parentKey)
  if (!parentKey && isUpdate) {
    form.append("_method", "PUT");
  }

  return form;
}
