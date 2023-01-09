import useThemeMode from "hooks/useThemeMode";

const Comment = () => {
  const { themeMode } = useThemeMode();

  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "prefer2/prefer2.dev");
        scriptElem.setAttribute("issue-term", "title");
        scriptElem.setAttribute("theme", `github-${themeMode}`);
        scriptElem.crossOrigin = "anonymous";
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};

export default Comment;
