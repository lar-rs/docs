# RFC - Requestion for comment

Die Request for Comments (RFC; englisch für Bitte um Kommentare) ist eine Reihe technischer und organisatorischer Dokumente des RFC-Editors zum Internet (ursprünglich Arpanet), die am 7. April 1969 begonnen wurden. Bei der ersten Veröffentlichung noch im ursprünglichen Wortsinne zur Diskussion gestellt, behalten RFC auch dann ihren Namen, wenn sie sich durch allgemeine Akzeptanz und Gebrauch zum Standard entwickelt haben. Hingegen wird die fortlaufende Zählung (Nummerierung) der RFCs weitergeführt und eine neue RFC-Nummer vergeben, wenn eine abschließend geänderte Version durch eine neue Version, gegebenenfalls auch zusammengefasst aus mehreren Vorläufern und mit mehreren Ergänzungen versehen zu einem neuen Dokument zusammengeführt, abgelöst wird.

## Motivation

** ☑ todo:Entwurf sind vile offene Punkten**
> Dokument befindet noch in Entwicklung
<!-- > [RFC-Designdocument](rfc.md#motivation) . -->
> Grunde fuer eile?
> Es ist mir gerade schwer direkt zu schreiben, wiel eigentliche Ziel noch nicht ganz durchschaubar.

Aus die Zeitgrunden werden hier vile einzelne Projekten zusammengefasst. Das macht einege schwirigkeiten dieses Block zu verfassen.
Trotzdem versuchen wir daraus etwas machen. Und die mogloche Punkte zusammenzufassen.
Generel geht es um ein Redisign eines Messgerates Type QuickTocUV.

In Ramen dieser Project wird ein Experement durchgefuhrt deren Ziel ist einfurung RFC-Verfahren in der Entwiecklungsprocess.

Fur weitere Bearbeitung relevante Themen und Skittze.

- `rfc-procedure` - Template fuer weitere Projecte und Verbeserungsvorschlage
- `QuickTOCuv` Redisign warum machen wir das?
- *Was wird erwartet* wenn wir fertig sind dann ... **Was passiert eigentlich dann..**
- `bug` Es ist nicht richtig und zielfuhrend Die Bearbeitung von Bugs weiter so machen wir es actuelle bei uns uber Jira und mehrere Zwischenstellen. Ein direktes leicht nachfolziebares Ablauf ware hier notwendig BUG -> Ticket -> Git PullRequest -> Get Merge -> Release.In ideal Fall automatesiert.
- Die *BUG's* mussen sofort beseitigt werden.Immer grosseres Prioritat von neuen Features.



- [Skitzze und Infos](rfc.md)
- [Skittze2](rfc1.md)
- [rfc edidor](https://www.rfc-editor.org/)

This repository exists to decide on a code style for Rust code, to be enforced
by the Rustfmt tool. Accepted RFCs live in the `text` directory and form a
specification for formatting tools.

The [Rust style guide](guide/guide.md) in this repository documents this style,
including examples.

## The formatting RFC process

See [RFC 1607](https://github.com/rust-lang/rfcs/pull/1607) for more details.
Where this process is under-specified, see the process for [Rust RFCs](https://github.com/rust-lang/rfcs).

* Open a GitHub issue on the fmt-rfcs repo for discussion. This discussion should
  define the style in as much detail as possible using rules and examples.
  - Search for existing issues and RFCs that may have already covered the topic.
    To discourage endless bikeshedding, the style team will close new discussions
    on old topics unless they provide fresh information (such as feedback based
    on having an implementation) or alternatives that were not previously
    considered.
* When discussion has reached a fixed point, the issue will be put into a final
  comment period (FCP).
* Reach consensus on the issue.
* Implement the style in rustfmt (behind an option if it is not the current
  default).
* Submit a PR to fmt-rfcs updating the style guide with the new style and the
  examples using the newly updated Rustfmt. The PR should include the default
  values for options to enforce the guideline, and which non-default options
  should be kept.
* If discussion is brief and the PR closely matches the original issue, it will
  be merged. If there are changes, then we will have an FCP for the PR too.
* Implementation in Rustfmt can then be finished (including any changes due to
  discussion of the PR), and default options are set.


### Scope of the process

This process is specifically limited to formatting style guidelines which can be
enforced by Rustfmt with its current architecture. Guidelines that cannot be
enforced by Rustfmt without a large amount of work are out of scope, even if
they only pertain to formatting.


### FCP

FCP will last for approximately two weeks and will be announced in This Week in
Rust.


### Decision and post-decision process

The style team will make the ultimate decision on accepting or closing a style
issue. Decisions should be by consensus. Most discussion should take place on
the issue comment thread, a decision should ideally be made when consensus is
reached on the thread. Any additional discussion amongst the style team will be
summarised on the thread.

## Names

 * Types shall be `UpperCamelCase`,
 * Enum variants shall be `UpperCamelCase`,
 * Where acronyms are used in the above cases, only capitalize the first letter, e.g., `HttpRequest`.
 * Struct fields shall be `snake_case`,
 * Function and method names shall be `snake_case`,
 * Local variables shall be `snake_case`,
 * Macro names shall be `snake_case`,
 * Constants (`const`s and immutable `static`s) shall be `SCREAMING_SNAKE_CASE`.
 * When a name is forbidden because it is a reserved word (e.g., `crate`), use a
   trailing underscore to make the name legal (e.g., `crate_`), or use raw
   identifiers if possible.

### Modules

Avoid `#[path]` annotations where possible.

## Guiding principles

When deciding on style guidelines, discussion should be steered by the following
principles (in priority order):

* readability
    - scan-ability
    - avoiding misleading formatting
    - accessibility - readable and editable by users using the the widest
      variety of hardware, including non-visual accessibility interfaces
    - readability of code when quoted in rustc error messages

* aesthetics
    - sense of 'beauty'
    - consistent with other languages/tools

* specifics
    - compatibility with version control practices - preserving diffs,
      merge-friendliness, etc.
    - preventing right-ward drift
    - minimising vertical space

* application
    - ease of manual application
    - ease of implementation (in Rustfmt, and in other tools/editors/code generators)
    - internal consistency
    - simplicity of formatting rules

To see how these principles were decided, see
[issue 4](https://github.com/rust-lang-nursery/fmt-rfcs/issues/4).

