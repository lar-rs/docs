## Strukturelemente

* [Best Practices für Git & Co](https://jaxenter.de/leitfaden-commit-messages-scm-73887)
* [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)


`label`-`spec:more` `Ein Kommentar, die Stichworte in klassische Textform.`

## LABEL
 z.B `init attach:text:conf:cid inital a new repository`

### `init` – Initialisiert ein Repository oder ein neues Release, Documentation 
repro:documentation / configuration …
archetype:jar / war / ear / pom / zip …
version:version
### `implement` – Implementieren einer neuen Funktion
function:clazz
### `change` – Ändern einer bestehenden Funktion
function:clazz
### `merge` – Erweitern einer vorhandenen Funktion
function:clazz
attach:clazz
### `bugfix` – Fehlerkorrektur
priority:critical / medium / low / design
### `review` – Qualitätssicherung
refactor:function
analyze:quality
migrate:function
format:source
### `release` – Fertigstellung eines Artefaktes zur Auslieferung
version:version
### `revert` – Rücknahme einer Revision
commit:id
### `branch` – Erzeugen einer Verweigung
create:name
stash:branch
### `merge` – Zusammenführen einer Verzweigung
from:branch
to:branch
### `close` – Schließen eines Entwicklungszweiges.
branch:name

## Specification

### `function`
### `conf'
### `attach`
### `format`
### `tests`
### `ci`
Auch wenn das vorgestellte Konzept leicht anzuwenden ist, soll an dieser Stelle ein einfaches Beispiel einer Commit Message die Zusammenhänge skizzieren.

[CORE-02] #IMPLEMENT ’function:GenericDAO’

<Core_0021526>

{Generic Data Access Object Pattern for centralized database access.}

Die hier dargestellte Commit Message besagt, dass die Funktion GenericDAO, welche der FunktionsID CORE-02 zugeordnet ist, implementiert wurde. Der zugehörige JIRA Task lautet: Core_0021526.

Best Practice
Auch wenn die Länge der Commit Messages nicht limitiert sind, ist es empfehlenswert, die Zeichenlänge der ersten Zeile auf 80 bis 100 zu begrenzen. Lässt man sich beispielsweise die History in einem Client wie TortoiseGit oder SmartGit anzeigen, wird die erste Zeile in der Übersicht dargestellt. Ist die darin enthaltene Nachricht zu lang, muss sie abgeschnitten werden, und der Vorteil einer kompakten Darstellung wurde somit verschenkt (Abb. 2).


Abbildung 2: TortoiseGit History

Ein anderer Punkt ist die Thematik, dass nicht alle Aktivitäten, die Änderungen im Code Repository erfordern, einer speziellen Funktion zugeordnet werden können. Anpassungen der Buildlogik sind beispielsweise solche Tätigkeiten. Für diese Fälle können projektübergreifende FunktionsIDs angelegt werden. Beispiele sind:

[CM-000] INIT – Erzeugen oder initialisieren eines Repositories
[CM-010] REVIEW – Projektübergreifende Qualitätsanpassungen durch ein Architekturboard.
[CM-020] BRANCH – SCM Aktivität
[CM-030] MERGE – SCM Aktivität.
[CM-040] RELEASE – Anpassen der Buildnummer eines Artefakts für ein Release.
[CM-050] build management – Hinzufügen von weiteren Bibliotheken.
Das Kürzel CM steht hier für Konfigurationsmanagement. Die Tätigkeiten {INIT, REVIEW, etc.} stellen in diesem Fall die Funktionsbeschreibung dar und kein Label. Ein typisches Beispiel einer solchen administrativen Tätigkeit ist das Initialisieren des Code Repositories.

[CM-000] #INIT ’archtype:jar’
{Initial the repository for Java JAR library.}

Um ein Gefühl für die Mächtigkeit des hier vorgestellten Konzepts zu entwickeln, ist im unteren Kasten ein Beispielprojekt mit verschiedensten Revisionen aufgeführt. Diesem Beispiel liegt die auf GitHub publizierte Bibliothek TP-CORE [6] zugrunde, welche als Java Artefakt auf Maven Central deployed und released wurde.

 

Beispielprojekt

Beispiel-Revisionen eines Projektes mit vorangestellten Revisionummern:

01 [CM-000] #INIT ’archtype:jar’{Initial the repository for Java JARlibrary.}

02 [CORE-05] #IMPLEMENT ’function:AppConfigDO’

{Domain Object for application configuration.}

03 [CM-010] #REVIEW ’analyze:quality’

{Formatting, fix Checkstyle hints, JavaDoc & test coverage}

04 [CORE-05] #IMPLEMENT ’function:ConfigurationDAO’

{Add the ConfigurationDAO implementation.}

05 [CORE-05] #EXTEND ’attach:tests’

{Create test cases for Bean Validation.}

06 [CORE-05] #EXTEND ’function:AppConfigDO’

{Change Primary Key to UUID and extend tests.}

07 [CORE-05] #CHANGE ’function:AppConfigDO’

{Rename to ConfigurationDO and define table indexes.}

08 [CORE-05] #EXTEND ’attach:tests’

{Update test cases for application configuration.}

09 [CORE-05] #EXTEND ’function:ConfigurationDAO’

{Update the implementation for ConfigurationDAOImpl.}

10 [CORE-05] #EXTEND ’function:ConfigurationDO’

{Add field mandatory.}

11 [CM-010] #REVIEW ’migrate:JUnit’

{Migrate Test cases from JUnit4 to JUnit5.}

12 [CM-010] #REVIEW ’analyze:quality’

{Fix JavaDoc, Checkstyle & Findbugs.}

13 [CM-050] #EXTEND ’function:POM’

{Update SCM connection to GitHub.}

14 [CM-050] #EXTEND ’attach:APIguards’

{Attach annotation for API documentation.}

15 [CORE-05] #REVIEW ’refactor:ConfigurationDO’

{FindBugs: optimize constructor parameters.}

16 [CM-040] #RELEASE ‘version:1.0’

{Prepare Artifact for Release.}

17 [CM-020] #BRANCH ‘create:1.0’

{Create BugFix Branch for Version 1.0}

18 [CM-040] #RELEASE ‘version:1.0.1’

{Adapt Maven GAV parameter for deploy on Maven Central.}