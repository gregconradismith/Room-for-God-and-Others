(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }

    callback();
  }

  function normalized(value) {
    return (value || "").toLowerCase().trim();
  }

  onReady(function () {
    Array.prototype.forEach.call(document.querySelectorAll("[data-nav-category]"), function (navCategory) {
      var toggle = navCategory.querySelector("[data-category-toggle]");
      var panel = navCategory.querySelector("[data-category-panel]");

      if (!toggle || !panel) {
        return;
      }

      toggle.addEventListener("click", function () {
        var expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
        panel.hidden = expanded;
      });
    });

    var browser = document.querySelector("[data-writing-browser]");
    if (!browser) {
      return;
    }

    var search = browser.querySelector("[data-browser-search]");
    var status = browser.querySelector("[data-browser-status]");
    var items = Array.prototype.slice.call(browser.querySelectorAll("[data-browser-item]"));
    var params = new URLSearchParams(window.location.search);
    var selectedCategory = params.get("category") || "";

    function matchesCategory(item, category) {
      if (!category) {
        return true;
      }

      var itemCategories = (item.getAttribute("data-categories") || "").split("|");
      return itemCategories.indexOf(category) !== -1;
    }

    function updateResults() {
      var query = normalized(search ? search.value : "");
      var hasFilter = query.length > 0 || selectedCategory.length > 0;
      var visible = 0;

      items.forEach(function (item) {
        var textMatch = !query || normalized(item.getAttribute("data-search")).indexOf(query) !== -1;
        var categoryMatch = matchesCategory(item, selectedCategory);
        var show = hasFilter && textMatch && categoryMatch;

        item.hidden = !show;
        if (show) {
          visible += 1;
        }
      });

      if (!status) {
        return;
      }

      if (!hasFilter) {
        status.textContent = "Enter a search term or choose Category from the navigation.";
      } else if (visible === 1) {
        status.textContent = selectedCategory ? "1 result in " + selectedCategory : "1 result";
      } else {
        status.textContent = selectedCategory ? visible + " results in " + selectedCategory : visible + " results";
      }
    }

    if (search && params.get("q")) {
      search.value = params.get("q");
    }

    if (search) {
      search.addEventListener("input", updateResults);
    }

    updateResults();
  });
}());
