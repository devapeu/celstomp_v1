document.getElementById('part-header').innerHTML = `
  <header class="top">
    <div class="topSlot left">
      <div id="topMenuBar" class="topMenuBar" role="menubar" aria-label="Main menu">
        <div class="topMenuWrap" data-menu="file">
          <button id="menuFileBtn" class="topBtn topMenuTrigger" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menuFilePanel">File</button>
          <div id="menuFilePanel" class="topMenuPanel" role="menu" hidden>
            <button id="saveProj" class="topMenuItem" type="button" role="menuitem">Save</button>
            <button id="loadProj" class="topMenuItem" type="button" role="menuitem">Load</button>
            <button id="restoreAutosave" class="topMenuItem" type="button" role="menuitem" title="Restore latest autosaved draft" disabled>Restore Draft</button>
            <div class="topMenuSep" role="separator"></div>
            <div class="topSubmenuWrap">
              <button id="menuExportBtn" class="topMenuItem topSubmenuTrigger" type="button" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="menuExportPanel">Export</button>
              <div id="menuExportPanel" class="topSubmenuPanel" role="menu" hidden>
                <button id="exportMP4" class="topMenuItem" type="button" role="menuitem">Export MP4</button>
                <button id="exportImgSeqBtn" class="topMenuItem" type="button" role="menuitem">Export Img Seq</button>
                <button id="exportGIFBtn" class="topMenuItem" type="button" role="menuitem">Export GIF</button>
              </div>
            </div>
          </div>
        </div>

        <div class="topMenuWrap" data-menu="edit">
          <button id="menuEditBtn" class="topBtn topMenuTrigger" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menuEditPanel">Edit</button>
          <div id="menuEditPanel" class="topMenuPanel" role="menu" hidden>
            <button id="clearAllBtn" class="topMenuItem danger" type="button" role="menuitem">Clear All</button>
          </div>
        </div>

        <div class="topMenuWrap" data-menu="tool-behavior">
          <button id="menuToolBehaviorBtn" class="topBtn topMenuTrigger" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menuToolBehaviorPanel">Tool Behavior</button>
          <div id="menuToolBehaviorPanel" class="topMenuPanel topMenuPanelWide" role="menu" hidden>
            <label class="topMenuSelectRow" for="stabilizationLevel">
              <span>Stabilization Level</span>
              <select id="stabilizationLevel">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5" selected>5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>
            <div id="penControls" class="topMenuPenControls" hidden>
              <label class="chip"><input id="pressureSize" type="checkbox" checked /> Pen pressure size</label>
              <label class="chip"><input id="pressureOpacity" type="checkbox" /> Pen pressure opacity</label>
              <label class="chip"><input id="pressureTilt" type="checkbox" /> Pen tilt/rotation</label>
            </div>
          </div>
        </div>
      </div>
      <div id="saveStateBadge" class="saveStateBadge saveStateChip" role="status" aria-live="polite">Saved</div>
    </div>

    <div class="brand">
      <span class="brandIcon brandIconL" aria-hidden="true"></span>
      <span class="brandText">CELSTOMP</span>
      <span class="brandIcon brandIconR" aria-hidden="true"></span>
    </div>

    <div class="topSlot right">
      <button id="infoBtn" class="topBtn" type="button" aria-controls="infoPanel" aria-expanded="false" title="Info">
        ℹ︎ Info
      </button>
    </div>
  </header>


  <div id="infoBackdrop" class="infoBackdrop" hidden></div>

  <aside id="infoPanel" class="infoPanel" aria-hidden="true" tabindex="-1">
    <div class="infoHeader">
      <div class="infoTitle">Celstomp Info</div>

    </div>

    <div class="infoBody">
      <p class="infoText">
        Cel animation online or offline!
      </p>

      <div class="infoBtns">

        <a class="infoLinkBtn" href="https://ko-fi.com/ginyoa" target="_blank" rel="noopener">Support me on Kofi!</a>
        <a class="infoLinkBtn" href="https://instagram.com/ginyoagoldie" target="_blank" rel="noopener">Instagram</a>
        <a class="infoLinkBtn" href="https://x.com/ginyoagoldie" target="_blank" rel="noopener">Twitter</a>
      </div>

      <hr class="infoHr" />

      <h3 class="infoH3">About Celstomp</h3>
      <ul class="infoList">


        <li>This site is vibecoded (coded with the help of AI). I am by no means in any way a traditional programmer, I
          had just wanted to make animation more accessible and intuitive!</li>


        <li>Its limited to a simple pixel brush and a simple layer system</li>

        <li>Shortcuts: 1, 2, 3, 4, 5, 6 for the Tools</li>
        <li>Up/Down or Q/W for Prev/Next Cel</li>
        <li>Left/Right or E/R for Prev/Next Frame</li>
        <li>You can drag the colored squares in the layer to reorder the layering of it</li>



        <li>Right click on some of the tools + onion skin to reveal more settings</li>
      </ul>
    </div>
  </aside>
`;
