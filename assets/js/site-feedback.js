(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }

    callback();
  }

  onReady(function () {
    var widget = document.querySelector("[data-page-feedback]");
    if (!widget) {
      return;
    }

    var path = widget.getAttribute("data-page-path") || window.location.pathname;
    var title = widget.getAttribute("data-page-title") || document.title;
    var status = widget.querySelector("[data-feedback-status]");
    var buttons = widget.querySelectorAll("[data-feedback-value]");
    var storageKey = "room-for-god-feedback:" + path;

    function setStatus(value) {
      Array.prototype.forEach.call(buttons, function (button) {
        var selected = button.getAttribute("data-feedback-value") === value;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });

      if (!status || !value) {
        return;
      }

      status.textContent = value === "useful"
        ? "Thanks. Marked useful."
        : "Thanks. Marked for review.";
    }

    try {
      setStatus(window.localStorage.getItem(storageKey));
    } catch (error) {
      setStatus(null);
    }

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener("click", function () {
        var value = button.getAttribute("data-feedback-value");

        try {
          window.localStorage.setItem(storageKey, value);
        } catch (error) {
          // Local persistence is only a convenience; feedback can still be sent.
        }

        if (typeof window.plausible === "function") {
          window.plausible("Page feedback", {
            props: {
              path: path,
              response: value,
              title: title
            }
          });
        }

        setStatus(value);
      });
    });
  });
}());
