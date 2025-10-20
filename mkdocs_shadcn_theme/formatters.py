"""Markdown helpers for the MkDocs shadcn theme."""

from __future__ import annotations

from html import escape
from textwrap import dedent
from uuid import uuid4


def component_fence(source, language, class_name, options, md, **kwargs):
    """Render a fenced ``component`` block as a preview + code example."""
    del language, class_name, options, md, kwargs  # Unused but part of the callback signature.

    raw = dedent(source).strip("\n")
    if not raw:
        return ""

    code_id = f"component-code-{uuid4().hex}"
    escaped = escape(raw)

    return (
        '<div class="component-example" data-component>'
        '  <div class="component-toolbar">'
        '    <div class="component-tabs" role="tablist">'
        '      <button type="button" class="component-tab is-active" data-component-tab="preview" aria-selected="true">'
        '        Preview'
        '      </button>'
        '      <button type="button" class="component-tab" data-component-tab="code" aria-selected="false">'
        '        Code'
        '      </button>'
        '    </div>'
        f'    <button type="button" class="component-copy" data-copy-from="#{code_id}">Copy</button>'
        '  </div>'
        f'  <div class="component-preview" data-component-panel="preview">{raw}</div>'
        '  <div class="component-code" data-component-panel="code" hidden>'
        f'    <pre id="{code_id}" class="component-codeblock"><code class="language-html">{escaped}</code></pre>'
        '  </div>'
        '  <noscript>'
        f'    <pre class="component-codeblock"><code class="language-html">{escaped}</code></pre>'
        '  </noscript>'
        '</div>'
    )
